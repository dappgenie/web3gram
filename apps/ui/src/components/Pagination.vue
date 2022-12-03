<script lang="ts" setup>

interface IPaginationProps {
  id: string;
  name: string;
  current: number;
  total: number;
  leftMargin?: number;
  rightMargin?: number;
  padding?: number;
}

const props = defineProps<IPaginationProps>();

interface IPaginationEmits {
  (e: "paginate", page: number): void;
  (e: "next"): void;
  (e: "prev"): void;
}
const emit = defineEmits<IPaginationEmits>();

/* -------------------------------------------------------------------------- */
/*                                  COMPUTED                                  */
/* -------------------------------------------------------------------------- */

const margins = computed(() => ({
  left: props.leftMargin ?? 2,
  right: props.rightMargin ?? 2,
}));
const padding = computed(() => props.padding ?? 1);

const pages = computed(() => {
  const all = [];
  let insideEllipsis = false;
  for (let i = 1; i <= props.total; i++) {
    const inMargin = i <= margins.value.left || i >= props.total - margins.value.right + 1;
    const inFocus = i >= props.current - padding.value && i <= props.current + padding.value;
    if (inMargin || inFocus) {
      all.push(i);
      insideEllipsis = false;
    } else if (!insideEllipsis) {
      all.push(-1);
      insideEllipsis = true;
    }
  }
  return all;
});
</script>
<template>
  <div :id="id" :name="name" :class="{ hidden: total <= 1 }" class="flex justify-center space-x-3">
    <button
      :disabled="props.current <= 1"
      :id="`${id}-prev`"
      :name="`${name}-prev`"
      @click="emit('prev')"
      class="pagination-btn"
    >
      <RiArrowLeftSLine class="w-4 h-4" />
    </button>
    <template v-for="page in pages">
      <button
        v-if="page > 0"
        :class="{ active: props.current === page }"
        :id="`${id}-page-${page}`"
        :name="`${name}-page-${page}`"
        @click="emit('paginate', page)"
        class="pagination-btn"
      >
        <span class="font-bold text-xs">{{ page }}</span>
      </button>
      <div v-else class="pagination-ellipsis">
        <span class="font-bold text-xs">...</span>
      </div>
    </template>
    <button 
      :disabled="props.current === total"
      @click="emit('next')"
      class="pagination-btn">
      <RiArrowRightSLine class="w-4 h-4" />
    </button>
  </div>
</template>
<style lang="css" scoped>
.pagination-btn {
  @apply flex justify-center items-center w-6 h-6 p-1 rounded cursor-pointer;
  @apply transition duration-200 ease-in-out;
  @apply scale-100 hover:scale-125;
  @apply active:bg-blue-500 dark:active:bg-blue-500 active:text-white;
  @apply bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-200;
  @apply fill-gray-800 dark:fill-gray-200;
}
  .pagination-btn :disabled {
    @apply cursor-not-allowed opacity-25;
    @apply scale-100;
  }

.pagination-ellipsis {
  @apply flex justify-center items-center w-6 h-6 p-1 rounded;
  @apply text-gray-800 dark:text-gray-200;
}
</style>
