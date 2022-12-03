import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const childRoutes = (prop: string, mode = false) => [
  {
    path: "",
    name: prop + ".list",
    meta: { auth: true, name: "Social App" },
    component: () => import("../views/Home/Home.vue"),
  },
];
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/homeLayout.vue"),
    children: childRoutes("home"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
