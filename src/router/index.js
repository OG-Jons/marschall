import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import CSSAnimations from "@/views/playground/M152/CSSAnimations";
import Playground from "@/views/playground/Playground";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/playground",
    children: [
      {
        path: "/",
        name: "Playground",
        component: Playground,
      },
      {
        path: "/css-animations",
        name: "CSS Animations",
        component: CSSAnimations,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next(from.path);
  } else {
    next();
  }
});

export default router;
