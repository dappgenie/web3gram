<template>
    <loader />
    <!-- loader END -->
    <!-- Wrapper Start -->
    <div class="wrapper">
       <DefaultSidebar/>
       <DefaultHeader :image="logoimage"/>
       <template v-for="(option,index) in breadcrumboptions" :key="index">
          <breadcrumb :img="option.img" :title="option.title" v-show="this.$route.meta.name === option.title"/>
       </template>
       <div id="content-page" class="content-page">
         <div class="container">
          <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
          </router-view>
         </div>
      </div>
    </div>
    <!-- Wrapper End-->
    <DefaultFooter/>
</template>
<script>
import DefaultSidebar from '../components/custom/partials/Sidebar/DefaultSidebar'
import DefaultHeader from '../components/custom/partials/Header/DefaultHeader'
import DefaultFooter from '../components/custom/partials/Footer/DefaultFooter'
import Breadcrumb from '../components/custom/Breadcrumb/Breadcrumb'
import logo from '../assets/images/logo.png'
export default {
  name: 'WithoutRightside',
  components: {
    DefaultSidebar,
    DefaultHeader,
    DefaultFooter,
    Breadcrumb
  },
  data () {
    return {
      breadcrumboptions: [
        {
          img: require('@/assets/images/page-img/profile-bg2.jpg'),
          title: 'Weather'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Group'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Group detail'
        },
        {
          img: require('@/assets/images/page-img/profile-bg4.jpg'),
          title: 'Birthday'
        },
        {
          img: require('@/assets/images/page-img/profile-bg5.jpg'),
          title: 'Profile Image'
        },
        {
          img: require('@/assets/images/page-img/profile-bg9.jpg'),
          title: 'Profile Video'
        },
        {
          img: require('@/assets/images/page-img/profile-bg3.jpg'),
          title: 'Friend List'
        },
        {
          img: require('@/assets/images/page-img/profile-bg6.jpg'),
          title: 'Profile Event'
        },
        {
          img: require('@/assets/images/page-img/profile-bg8.jpg'),
          title: 'Music'
        },
        {
          img: require('@/assets/images/page-img/profile-bg6.jpg'),
          title: 'Calendar'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Store Category'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Category List'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Store'
        },
        {
          img: require('@/assets/images/page-img/profile-bg7.jpg'),
          title: 'Store Checkout'
        }
      ],
      logoimage: logo
    }
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
