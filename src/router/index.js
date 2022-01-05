import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";

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
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
