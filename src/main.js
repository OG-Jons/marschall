import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.scss";
import VueTyperPlugin from "vue-typer";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import VueSocketIO from "vue-socket.io";

import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniInstagram,
  uniGithub,
  uniEnvelope,
  uniTrash,
  uniPen,
  uniDraggabledots,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniInstagram,
  uniGithub,
  uniEnvelope,
  uniTrash,
  uniPen,
  uniDraggabledots,
]);
Vue.use(Unicon);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(VueMeta);

Vue.use(VueTyperPlugin);

const BACKEND_URL = import.meta.env.PROD
  ? "https://api.marschall.pro/"
  : "http://localhost:3000/";

Vue.use(
  new VueSocketIO({
    debug: import.meta.env.DEV,
    connection: BACKEND_URL,
    options: {
      path: "/tasks",
    },
  })
);

axios.defaults.baseURL = BACKEND_URL;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
