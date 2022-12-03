<script lang="ts" setup>
interface IModalProps {
  show: boolean
  hideClose?: boolean
  zIndex?: number
  type: 'SUCCESS' | 'ERROR'
}
defineProps<IModalProps>()

const emit = defineEmits<IModalEmits>()

interface IModalEmits {
  (e: 'close'): void
  (e: 'backdrop'): void
  (e: 'update'): void
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        :style="{ zIndex: zIndex ?? 100 }"
        class="modal"
        @click="emit('backdrop')"
      >
        <div class="modal-content" @click="$event.stopPropagation()">
          <button
            v-if="!hideClose"
            class="close-btn"
            @click.stop="emit('close')"
          >
            <div i-mdi:close />
          </button>

          <div v-if="type === 'SUCCESS'" class="w-full m-auto mb-8 ui-success">
            <svg class="m-auto" viewBox="0 0 87 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-3" transform="translate(2.000000, 2.000000)">
                  <circle id="Oval-2" stroke="rgba(165, 220, 134, 0.2)" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
                  <circle id="Oval-2" class="ui-success-circle" stroke="#A5DC86" stroke-width="4" cx="47.5" cy="47" r="41.5" />
                  <polyline id="Path-2" class="ui-success-path" stroke="#A5DC86" stroke-width="4" points="19 38.8036813 31.1020744 54.8046875 63.299221 28" />
                </g>
              </g>
            </svg>
          </div>
          <div v-if="type === 'ERROR'" class="w-full m-auto mb-8 ui-error">
            <svg class="m-auto" viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-2" transform="translate(2.000000, 2.000000)">
                  <circle id="Oval-2" stroke="rgba(252, 191, 191, .5)" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
                  <circle class="ui-error-circle" stroke="#F74444" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
                  <path id="Line" class="ui-error-line1" d="M22.244224,22 L60.4279902,60.1837662" stroke="#F74444" stroke-width="3" stroke-linecap="square" />
                  <path id="Line" class="ui-error-line2" d="M60.755776,21 L23.244224,59.8443492" stroke="#F74444" stroke-width="3" stroke-linecap="square" />
                </g>
              </g>
            </svg>
          </div>

          <div class="w-full text-center text-lg text-primary dark:text-secondary font-bold mb-4">
            <span v-if="type === 'SUCCESS'">Success</span>
            <span v-if="type === 'ERROR'">Error</span>
          </div>
          <div text-color-secondary text-base font-semibold>
            <slot name="content" />
          </div>
          <div class="mt-8" :class="(type === 'SUCCESS' || type === 'ERROR') ? 'justify-center' : 'justify-end'">
            <!-- <a href="#" class="btn btn-primary text-base-100">Yay!</a> -->
            <!-- <slot name="buttons" /> -->
            <div m-auto w-fit>
              <Button
                v-if="type === 'SUCCESS'" class="btn font-bold btn-success" @click.stop="emit('update')"
              >
              <template #content>Continue</template>
              </Button>
              <Button
                v-if="type === 'ERROR'" class="btn font-bold"
                color="warning" @click.stop="emit('update')"
              >
              <template #content>Close</template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

  <style lang="css" scoped>
  .modal {
    @apply fixed top-0 left-0 w-screen h-screen flex overflow-y-auto font-primary;
    @apply bg-gray-100 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70;
  }

  .modal-content {
    @apply p-14 m-auto background relative rounded-lg overflow-hidden overflow-y-auto shadow-btn dark:shadow-btn-dark;
    /* @apply min-w-[80%] md:min-w-[70%] lg:min-w-[40%]  */
  }
  .btn-success {
    @apply bg-[#62b052]
  }
  .btn-warning {
    @apply bg-[#fd5757]
  }
  .close-btn {
    @apply absolute top-0 right-0 z-40 m-2 w-8 h-8 opacity-20 hover:opacity-100;
    @apply transition duration-300 ease-in-out;
    @apply fill-gray-800 dark:fill-gray-100;
  }
  .modal-enter-active {
    animation: fade-in 0.3s;
  }
  .modal-enter-active .modal-content {
    animation: bounce-in 0.3s;
  }
  .modal-leave-active {
    animation: fade-in 0.3s reverse;
  }
  .modal-leave-active .modal-content {
    animation: bounce-in 0.3s reverse;
  }
.ui-success,
.ui-error {
  width: 100px;
  height: 100px;
}

.ui-success .ui-success-circle {
    stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
    stroke-dashoffset: 260.75219024795285px;
    transform: rotate(220deg);
    transform-origin: center center;
    stroke-linecap: round;
    animation: ani-success-circle 1s ease-in both;
  }
  .ui-success .ui-success-path {
    stroke-dasharray: 60px 64px;
    stroke-dashoffset: 62px;
    stroke-linecap: round;
    animation: ani-success-path 0.4s 1s ease-in both;
  }

@keyframes ani-success-circle {
  to {
    stroke-dashoffset: 782.2565707438586px;
  }
}

@keyframes ani-success-path {
  0% {
    stroke-dashoffset: 62px;
  }
  65% {
    stroke-dashoffset: -5px;
  }
  84% {
    stroke-dashoffset: 4px;
  }
  100% {
    stroke-dashoffset: -2px;
  }
}
.ui-error .ui-error-circle {
    stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
    stroke-dashoffset: 260.75219024795285px;
    animation: ani-error-circle 1.2s linear;
  }
  .ui-error .ui-error-line1 {
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line 0.15s 1.2s linear both;
  }
  .ui-error .ui-error-line2 {
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line 0.2s 0.9s linear both;
  }

@keyframes ani-error-line {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes ani-error-circle {
  0% {
    stroke-dasharray: 0, 260.75219024795285px;
    stroke-dashoffset: 0;
  }
  35% {
    stroke-dasharray: 120px, 120px;
    stroke-dashoffset: -120px;
  }
  70% {
    stroke-dasharray: 0, 260.75219024795285px;
    stroke-dashoffset: -260.75219024795285px;
  }
  100% {
    stroke-dasharray: 260.75219024795285px, 0;
    stroke-dashoffset: -260.75219024795285px;
  }
}

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    /* 50% {
        transform: scale(1.15);
      } */
    100% {
      transform: scale(1);
    }
  }
  </style>

