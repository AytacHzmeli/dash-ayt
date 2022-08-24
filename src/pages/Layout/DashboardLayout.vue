<template>
  <div class="wrapper">
    <notifications></notifications>
    <div class="stil">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
      
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <!--<p>Dashboard</p>-->
        <router-link :to="{ name: 'DASHBOARD' }"><p class="stillItems">Dashboard</p></router-link>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <!-- <p>User Profile</p> -->
        <router-link :to="{ name: 'USERPROFILE' }"><p class="stillItems">User Profile</p></router-link>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <!-- <p>Table list</p> -->
        <router-link :to="{ name: 'TABLELIST' }"><p class="stillItems">Table list</p></router-link>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <!-- <p>Typography</p> -->
        <router-link :to="{ name: 'TYPOGRAPHY' }"><p class="stillItems">Typography</p></router-link>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <!-- <p>Icons</p> -->
        <router-link :to="{ name: 'ICONS' }"><p class="stillItems">Icons</p></router-link>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <!-- <p>Maps</p> -->
        <router-link :to="{ name: '' }"><p class="stillItems">Maps</p></router-link>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <!-- <p>Notifications</p> -->
        <router-link :to="{ name: '' }"><p class="stillItems">Notifications</p></router-link>
      </sidebar-link>
      <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p class="stillItems">Upgrade to PRO</p>
      </sidebar-link>
    </side-bar>
    </div>
    
    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./MyContent.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
<style lang="scss">
.stil{
  text-align: center;
  width: 13vw;
  padding-top: 10%;
  height: auto;
  background-color: gray;
}
.wrapper{
  display: flex;
  justify-content:space-evenly;
}
.stillItems{
  font-size: 1vw;
}

</style>