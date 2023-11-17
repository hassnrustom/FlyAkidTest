import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue"
import ResultView from "@/views/ResultView.vue"

const routes = [

  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultView,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active_link",
  routes,
});


export default router;
