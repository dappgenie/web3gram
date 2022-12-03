<script lang="ts" setup>
import { ref } from 'vue';
import { register } from 'vue-advanced-chat'
  register()
const messagesLoaded = ref(false)
const currentUserId = ref('1234')
const rooms = ref([])
const messages = ref([])
const roomActions = ref([
          { name: 'inviteUser', title: 'Invite User' },
          { name: 'removeUser', title: 'Remove User' },
          { name: 'deleteRoom', title: 'Delete Room' }
        ]) 
const addRoom = (room: string, roomIndex: number) => {
rooms.value[roomIndex] = room
rooms.value = [...rooms.value]
}
const fetchMessages = ({ room, options }) => {
  messagesLoaded.value = false
  // use timeout to imitate async server fetched data
  setTimeout(() => {
    messages.value = []
    messagesLoaded.value = true
  })
}
</script>

<template>
<vue-advanced-chat
  :current-user-id="currentUserId"
  :rooms="JSON.stringify(rooms)"
  :messages="JSON.stringify(messages)"
  :room-actions="JSON.stringify(roomActions)"
/>
</template>

<style scoped lang="css"></style>
