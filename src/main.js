import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "./assets/scss/material-dashboard.scss";
import SideBar from "./components/SidebarPlugin";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default {
  install(Vue) {
    Vue.use(SideBar);
    Vue.use(VueMaterial);
  },
};
