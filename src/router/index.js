import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Lineup from "../views/Lineup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lineup",
    name: "Lineup",
    component: Lineup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
