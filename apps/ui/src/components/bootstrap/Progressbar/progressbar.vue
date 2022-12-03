<template>
    <div :class="`progress-bar ${className}`" :role="role" :aria-valuemin="ariavaluemin" :aria-valuenow="ariavaluenow" :aria-valuemax="ariavaluemax">
      {{innerText}}
      <slot/>
    </div>
</template>

<script>
export default {
  name: 'progressbar',
  props: {
    ariavaluemin: { type: Number, default: 0 },
    ariavaluenow: { type: Number },
    ariavaluemax: { type: Number },
    color: { type: String, default: 'primary' },
    verticle: { type: Boolean, default: false },
    role: { type: String, default: 'progressbar' },
    innerText: { type: String }
  }
}
</script>
