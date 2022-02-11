import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.scss";
import VueTyperPlugin from "vue-typer";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";

import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import { uniInstagram, uniGithub, uniEnvelope } from "vue-unicons/dist/icons";

Unicon.add([uniInstagram, uniGithub, uniEnvelope]);
Vue.use(Unicon);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(VueMeta);

Vue.use(VueTyperPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
