import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const childRoutes = (prop: string, mode = false) => [
    {
        path: '',
        name: prop + '.list',
        meta: { auth: true, name: 'Social App' },
        component: () => import('../views/Home/Home.vue'),
    },
]
const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'home',
        component: () => import('../layouts/homeLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/Home/Home.vue'),
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/Profile/Profile.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
