import { Ref } from "vue";

//To get the value from a function or variable
function getWatcherValue<TValue>(watcher: Ref<TValue> | (() => TValue)): TValue {
  return typeof watcher === "function" ? watcher() : watcher.value;
}

interface IUseQueryOptions<TResult = any, TParams = any> {
  onSuccess?: (data: TResult, params: TParams) => void;
  onError?: (error: any, params: TParams) => void;
  enabled?: boolean;
}

export function useQuery<TResult = any, TParams = any>(
  caller: (params: TParams) => Promise<TResult>,
  params: (() => TParams) | Ref<TParams>,
  options: IUseQueryOptions<TResult, TParams> = {}
) {
  const { onSuccess, onError, enabled = true } = options;

  const data = ref<TResult>();
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const isSuccess = ref<boolean>(false);
  const error = ref<any>();

  const fetch = computed(
    () => async (isEnabled = true) => {
      if (isEnabled) {
        const p = getWatcherValue(params);
        try {
          isLoading.value = true;
          isError.value = false;
          isSuccess.value = false;
          data.value = await caller(p);
          isSuccess.value = true;
          // call onSuccess callback if provided
          onSuccess && onSuccess(data.value, p);
        } catch (e) {
          isError.value = true;
          error.value = e;
          // call onError callback if provided
          onError && onError(error.value, p);
        } finally {
          isLoading.value = false;
        }
      }
    }
  )

  watch(
    [params, () => enabled],
    async ([_, e]) => {
      fetch.value(e);
    },
    { deep: true, immediate: true }
  );

  return { data, isLoading, isError, isSuccess, error, refetch: fetch.value };
}

interface IUseMutationOptions<TResult = any, TParams = any> {
  onSuccess?: (data: TResult, params: TParams) => void;
  onError?: (error: any, params: TParams) => void;
}

export function useMutation<TResult, TParams>(
  callback: (params: TParams) => Promise<TResult>,
  options: IUseMutationOptions<TResult> = {},
) {
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const isSuccess = ref<boolean>(false);
  const error = ref<any>();

  const { onSuccess, onError } = options;

  const mutate = async (params: TParams) => {
    try {
      isLoading.value = true;
      isError.value = false;
      isSuccess.value = false;
      // run the callback and get response
      const data = await callback(params);
      // run onSuccess
      onSuccess && onSuccess(data, params);
    } catch (e) {
      isError.value = true;
      error.value = e;
      onError && onError(e, params)
    } finally {
      isLoading.value = false;
    }
  }

  return { mutate, isLoading, isSuccess, isError, error }
}

/**
 * Same as useMutation but opens a confirm dialog before running the mutation
 */
// export function useConfirmMutation<TResult, TParams>(
//   callback: (params: TParams) => Promise<TResult>,
//   options: IUseMutationOptions<TResult> = {},
//   message: Omit<IDialogMessage, 'onConfirm' | 'onCancel'>
// ) {
//   const dialog = useDialogStore();

//   const { mutate, ...mutationStates } = useMutation(callback, options);

//   const runMutation = async (params: TParams) => {
//     dialog.show({
//       ...message,
//       onConfirm() {
//         mutate(params);
//       }
//     });
//   }
//   return {
//     mutate: runMutation,
//     ...mutationStates
//   }
// }
