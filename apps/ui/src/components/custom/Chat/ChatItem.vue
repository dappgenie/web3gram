<template>
  <div class="d-flex align-items-center gap-1 flex-grow-1 ">
    <div class="avatar me-2">
      <img :src="item.image" :alt="item.image" class="avatar-50 ">
      <span class="avatar-status">
        <i class="material-symbols-outlined filled md-14" :class="item.isActive ? 'text-success' :'text-warning'">circle</i>
      </span>
    </div>
    <div class="chat-sidebar-name d-inline">
      <h6 class="mb-0 d-block ">{{ item.name }}</h6>
      <span>{{ item.role }}</span>
    </div>
    <div class="chat-meta float-right text-center mt-2 me-1" v-if="item.isPrivate">
      <div class="badge rounded-pill bg-primary d-block">20</div>
      <span class="text-nowrap">05 min</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    item: { type: Object }
  }
}
</script>
