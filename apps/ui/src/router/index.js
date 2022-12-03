import { createRouter, createWebHistory } from 'vue-router'
import '../../src/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
import '../../src/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import '../../src/assets/vendor/remixicon/fonts/remixicon.css'
const childRoutes = (prop, mode) => [
  {
    path: '',
    name: prop + '.list',
    meta: { auth: true, name: 'Social App' },
    component: () => import('../views/Apps/Social/SocialApp')
  },
  {
    path: 'profile',
    name: prop + '.profilemain',
    meta: { auth: true, name: 'Profile' },
    component: () => import('../views/Profile/profile')
  },
  {
    path: 'profileimage',
    name: prop + '.profileimage',
    meta: { auth: true, name: 'Profile Image' },
    component: () => import('../views/SocailMain/Profile/ProfileImage')
  },
  {
    path: 'profilevideo',
    name: prop + '.profilevideo',
    meta: { auth: true, name: 'Profile Video' },
    component: () => import('../views/SocailMain/Profile/ProfileVideo')
  },
  {
    path: 'profileevent',
    name: prop + '.profileevent',
    meta: { auth: true, name: 'Profile Event' },
    component: () => import('../views/SocailMain/Profile/ProfileEvent')
  },
  {
    path: 'event-detail',
    name: prop + '.event-detail',
    meta: { auth: true, name: 'Event-Detail' },
    component: () => import('../views/SocailMain/Profile/Event-Detail')
  },
  {
    path: 'profilebadges',
    name: prop + '.profilebadges',
    meta: { auth: true, name: 'Profile Badges' },
    component: () => import('../views/SocailMain/Profile/ProfileBadges')
  },
  {
    path: 'profileforum',
    name: prop + '.profileforum',
    meta: { auth: true, name: 'Profile Forum' },
    component: () => import('../views/SocailMain/Profile/ProfileForum')
  },
  {
    path: 'group',
    name: prop + '.group',
    meta: { auth: true, name: 'Group' },
    component: () => import('../views/SocailMain/Group/Group')
  },
  {
    path: 'group-detail',
    name: prop + '.group-detail',
    meta: { auth: true, name: 'Group detail' },
    component: () => import('../views/SocailMain/Group/Group-detail')
  },
  {
    path: 'friendlist',
    name: prop + '.friendlist',
    meta: { auth: true, name: 'Friend List' },
    component: () => import('../views/SocailMain/Friends/FriendList')
  },
  {
    path: 'notification',
    name: prop + '.notification',
    meta: { auth: true, name: 'Notification' },
    component: () => import('../views/SocailMain/Notifications/Notification')
  },
  {
    path: 'friendrequest',
    name: prop + '.friendrequest',
    meta: { auth: true, name: 'Friend Request' },
    component: () => import('../views/SocailMain/Friends/FriendRequest')
  },
]
const chatChildRoutes = (prop, mode) => [
  {
    path: 'chat',
    name: prop + '.chat',
    component: () => import('../views/Apps/Chat/Index')
  }
]
const pagesChildRoutes = (prop, mode = false) => [
  {
    path: 'error404',
    name: prop + '.error404',
    component: () => import('../views/Pages/Error404')
  },
]
const blankchildRoutes = (prop, mode) => [
  {
    path: 'signin',
    name: prop + '.sign-in',
    component: () => import('../views/AuthPages/Default/SignIn')
  }
]
const userChildRoute = (prop, mode = false) => [
  {
    path: 'profile-edit',
    name: prop + '.profile-edit',
    meta: { auth: true, name: 'Edit Profile' },
    component: () => import('../views/User/ProfileEdit')
  }
]

const routes = [
  {
    path: '/',
    name: 'social',
    component: () => import('../layouts/Default'),
    children: childRoutes('social')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/Empty'),
    children: blankchildRoutes('auth1')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../layouts/Chat'),
    children: chatChildRoutes('chat')
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import('../layouts/Empty'),
    children: pagesChildRoutes('default')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: userChildRoute('user')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
