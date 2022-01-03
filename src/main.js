import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.scss";
import VueTyperPlugin from "vue-typer";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(VueTyperPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
