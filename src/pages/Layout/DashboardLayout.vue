<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }"> -->
    <notifications></notifications>
    <div class="stil">
      <side-bar
        :sidebar-item-color="sidebarBackground"
        :sidebar-background-image="sidebarBackgroundImage"
      >
        <mobile-menu slot="content"></mobile-menu>
        <sidebar-link>
          <router-link :to="{ name: 'DASHBOARD' }">
            <md-icon>dashboard</md-icon>
            <p>Dashboard</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'USERPROFILE' }">
            <md-icon>person</md-icon>
            <p>USERPROFILE</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'TABLELIST' }">
            <md-icon>content_paste</md-icon>
            <p>TABLELIST</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'TYPOGRAPHY' }">
            <md-icon>library_books</md-icon>
            <p>TYPOGRAPHY</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'ICONS' }">
            <md-icon>bubble_chart</md-icon>
            <p>ICONS</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'MAPS' }">
            <md-icon>location_on</md-icon>
            <p>Maps</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'NOTIFICATIONS' }">
            <md-icon>notifications</md-icon>
            <p>Notifications</p></router-link
          >
        </sidebar-link>
        <sidebar-link>
          <router-link :to="{ name: 'UPGRADETOPRO' }">
            <md-icon>unarchive</md-icon>
            <p class="stillItems">Upgrade to PRO</p></router-link
          >
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

      <MyContent></MyContent>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import MyContent from "./MyContent.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  name: "DashboardLayout",
  components: {
    TopNavbar,
    MyContent,
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
.stil {
  // position: fixed;
  background-position: 50%;
  text-align: center;
  // height: auto;
  width: 13vw;
  padding-top: 10%;
  background-color: gray;
  background-image: url("@/assets/img/sidebar-2.jpg");
  filter: brightness(100%);
}
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
p {
  font-size: 1vw;
  color: white;
  font-weight: bold;
}
</style>
