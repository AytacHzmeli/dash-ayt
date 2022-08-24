import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import HomeView from "@/pages/HomeView.vue";
import DashBoard from "@/pages/DashBoard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Icons from "@/pages/Icons.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "homeview",
        component: HomeView,
        
    },
    {
        path: "DashboardLayout",
        name: "DashboardLayout",
        component: DashboardLayout,
    },
    {
        path: "dashboard",
        name: "DASHBOARD",
        component: DashBoard,
    },
    {
        path: "user",
        name: "USERPROFILE",
        component: UserProfile,
    },
    {
        path: "icons",
        name: "ICONS",
        component: Icons,
    },
    {
        path: "table",
        name: "TABLELIST",
        component: TableList,
    },
    {
        path: "typography",
        name: "TYPOGRAPHY",
        component: Typography,
    },
    

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;