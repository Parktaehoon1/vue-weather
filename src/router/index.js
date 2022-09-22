import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/page-weather/",
      name: Home,
      component: Home,
    },
  ],
});
