<template>
    <div :class="`right-sidebar-mini ${miniClass} data-scrollbar` ">
        <div class="right-sidebar-panel p-0">
           <div class="card shadow-none">
              <div class="card-body p-0">
                 <div class="media-height p-3" data-scrollbar="init">
                    <div v-for="(item,index) in items" :key="index" class="d-flex align-items-center mb-4">
                       <div :class="`iq-profile-avatar status-${item.status}`">
                          <img class="rounded-circle avatar-50" :src="item.src" alt="">
                       </div>
                       <div class="ms-3">
                          <h6 class="mb-0">{{item.name}}</h6>
                          <p class="mb-0">{{item.post}}</p>
                       </div>
                    </div>
                 </div>
                 <div class="right-sidebar-toggle bg-primary text-white mt-3 d-flex" @click="toggleMini">
                    <span class="material-symbols-outlined">chat</span>
                 </div>
              </div>
           </div>
        </div>
     </div>
</template>
<script>
export default {
  name: 'DefaultRightSidebar',
  data () {
    return {
      miniClass: '',
      items: [
        {
          src: require('@/assets/images/user/01.jpg'),
          status: 'online',
          name: 'Anna Sthesia',
          post: 'Just Now'
        },
        {
          src: require('@/assets/images/user/02.jpg'),
          status: 'online',
          name: 'Paul Molive',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/03.jpg'),
          status: 'online',
          name: 'Anna Mull',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/04.jpg'),
          status: 'online',
          name: 'Paige Turner',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/11.jpg'),
          status: 'online',
          name: 'Bob Frapples',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/02.jpg'),
          status: 'online',
          name: 'Barb Ackue',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/03.jpg'),
          status: '',
          name: 'Greta Life',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/12.jpg'),
          status: 'away',
          name: 'Ira Membrit',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/01.jpg'),
          status: 'away',
          name: 'Pete Sariya',
          post: 'Admin'
        },
        {
          src: require('@/assets/images/user/02.jpg'),
          status: '',
          name: 'Monty Carlo',
          post: 'Admin'
        }
      ]
    }
  },
  methods: {
    toggleMini () {
      this.rightSideBarMini = !this.rightSideBarMini
      this.checkRightSideBar()
    },
    checkRightSideBar () {
      const body = document.querySelector('body')
      if (this.rightSideBarMini) {
        this.miniClass = 'right-sidebar'
        body.classList.add('right-sidebar-close')
      } else {
        this.miniClass = ''
        body.classList.remove('right-sidebar-close')
      }
    }
  }
}
</script>
