import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OkaneViewVue from "../views/OkaneView.vue";
import login from "../views/loginView.vue";
import signView from "../views/signView.vue";
import Demo from "../views/demo-firestore.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Okane",
    name: "Money",
    component: OkaneViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/sign",
    name: "signView",
    component: signView,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
