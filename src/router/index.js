import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import HomeView from "@/pages/HomeView.vue";
import DashBoard from "@/pages/DashBoard.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
      path: 'DashboardLayout',
      name: 'DashboardLayout',
      component: DashboardLayout
  },
  {
    path: "dashboard",
    name: "DASHBOARD",
    component: DashBoard,
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
