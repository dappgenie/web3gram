<script lang="ts" setup>
import { ref } from 'vue';
import '@/assets/css/chat.css'
import { register } from 'vue-advanced-chat'
  register()
const messagesLoaded = ref(false)
const currentUserId = ref('1234')
const rooms = ref([
  {
    roomId: '1',
    roomName: 'Room 1',
    avatar: 'assets/imgs/people.png',
    unreadCount: 4,
    index: 3,
    lastMessage: {
      _id: 'xyz',
      content: 'Last message received',
      senderId: '1234',
      username: 'John Doe',
      timestamp: '10:20',
      saved: true,
      distributed: false,
      seen: false,
      new: true
    },
    users: [
      {
        _id: '1234',
        username: 'John Doe',
        avatar: 'assets/imgs/doe.png',
        status: {
          state: 'online',
          lastChanged: 'today, 14:30'
        }
      },
      {
        _id: '4321',
        username: 'John Snow',
        avatar: 'assets/imgs/snow.png',
        status: {
          state: 'offline',
          lastChanged: '14 July, 20:00'
        }
      }
    ],
    typingUsers: [ 4321 ]
  }
])
const messages = ref([])
const roomActions = ref([
          { name: 'inviteUser', title: 'Invite User' },
          { name: 'removeUser', title: 'Remove User' },
          { name: 'deleteRoom', title: 'Delete Room' }
        ]) 
const addRoom = (room: any, roomIndex: number) => {
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
<div class="box">
  <vue-advanced-chat
    :current-user-id="currentUserId"
    :rooms="JSON.stringify(rooms)"
    :messages="JSON.stringify(messages)"
    :room-actions="JSON.stringify(roomActions)"
  />
</div>
</template>

<style scoped lang="css">
.box {
  @apply py-16 h-screen;
}
</style>
