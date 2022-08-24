import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
// import "vue-material/dist/vue-material.css";
import "./assets/scss/material-dashboard.scss";
import SideBar from "./components/SidebarPlugin";

import Chartist from "chartist";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueMaterial);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

Vue.config.productionTip = false;
Vue.prototype.$Chartist = Chartist;

new Vue({
    el: "#app",
    render: (h) => h(App),
    router,
    data: {
      Chartist: Chartist,
    },
  });
  
export default {
    install(Vue) {
        Vue.use(SideBar);

        Vue.use(VueMaterial);
    },
};
