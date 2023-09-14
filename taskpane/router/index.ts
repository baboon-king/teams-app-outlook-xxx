import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getFirstPathSegment } from "@/utils";
import { createMemoryHistory } from "vue-router";

const base = import.meta.env.BASE_URL + getFirstPathSegment(import.meta.url);
const router = createRouter({
  history: createMemoryHistory(base),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
