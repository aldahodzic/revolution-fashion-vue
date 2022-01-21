import Vue from "vue";
import App from "./App.vue";
import store from './store';
import "./assets/css/styles.scss";
import "./assets/css/reset.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
