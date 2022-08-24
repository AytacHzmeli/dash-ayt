import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Chartist from "chartist";
import VueMaterial from "vue-material";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/vue-material.css";
import "vue-material/dist/theme/default.css";
import "./assets/scss/material-dashboard.scss";
<<<<<<< HEAD
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
  
=======
import SideBar from "@/components/SidebarPlugin/SideBar";
import Notifications from "./components/NotificationPlugin/Notifications"
// 
Vue.use(VueMaterial);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.config.productionTip = false;
Vue.prototype.$Chartist = Chartist;
import "es6-promise/auto";

new Vue({
    router,
    data: {
        Chartist: Chartist,
    },
    render: (h) => h(App),
}).$mount("#app");


// export default {
//     SideBar,
//     VueMaterial
// }

>>>>>>> akif_work
export default {
    install(Vue) {
        Vue.use(SideBar);
        Vue.use(VueMaterial);
    },
};
<<<<<<< HEAD
=======


// new Vue({
//     router,
//     data: {
//         Chartist: Chartist,
//     },
//     render: (h) => h(App),
// }).$mount("#app");
>>>>>>> akif_work
