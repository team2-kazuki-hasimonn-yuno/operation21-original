import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Demo from "../views/demo-firestore.vue"
import Login from "../views/loginView.vue"
import About from "../views/AboutView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
