import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import CSSAnimations from "../views/playground/M152/CSSAnimations";
import Playground from "../views/playground/Playground";
import PokeAPI from "../views/playground/PokeAPI";
import UrbanDictionary from "../views/playground/UrbanDictionary";
import TaskList from "../components/playground/TaskList";
import TaskPage from "../views/playground/TaskPage";

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
    path: "/tasklist",
    name: "Tasklist",
    component: TaskPage,
  },
  {
    path: "/tasklist/:id",
    name: "Tasklist",
    component: TaskList,
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground,
  },
  {
    path: "/playground/css-animations",
    name: "CSS Animations",
    component: CSSAnimations,
  },
  {
    path: "/playground/pokedex",
    name: "Pokedex",
    component: PokeAPI,
  },
  {
    path: "/playground/urban",
    name: "Urban Dictionary",
    component: UrbanDictionary,
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
