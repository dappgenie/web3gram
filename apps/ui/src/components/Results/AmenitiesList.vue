<script lang="ts" setup>
interface IAmenitiesList {
  // type: 'wifi' | 'parking' | 'wallet' | 'Television'
  type: string
  color?: 'gradient' | 'primary' | 'secondary'
  size?: 'text-xs' | 'text-sm' | 'text-lg'
}
defineProps<IAmenitiesList>()
</script>

<template>
  <div v-if="type === 'Free WiFi'" :class="[color ? `bg-${color}` : 'bg-gradient', size ?? 'text-base']" i-mdi:wifi />
  <div v-if="type === 'Refrigerator'" :class="[color ? `bg-${color}` : 'bg-gradient', size ?? 'text-base']" i-mdi:fridge />
  <div v-if="type === 'Television'" :class="[color ? `bg-${color}` : 'bg-gradient', size ?? 'text-base']" i-mdi:television-classic />
  <div v-if="type === 'In-room climate control (air conditioning)'" :class="[color ? `bg-${color}` : 'bg-gradient', size ?? 'text-base']" i-mdi:snowflake />
  <div text-sm>
    {{ type }}
  </div>
</template>

<style scoped lang="css">
.bg-gradient {
    background: linear-gradient(275.36deg, #383838 0%, #8264F9 100%);
}
.bg-primary {
    @apply text-primary;
}
.bg-secondary {
    @apply text-secondary;
}
</style>
