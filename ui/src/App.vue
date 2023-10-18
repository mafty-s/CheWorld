<template>
  <!--  <div id="app">-->
  <!--  <RouterView />-->
  <!--  </div>-->
  <div>
    <LoginPage v-if="currPage==='login'"/>
    <MainPage  v-if="currPage==='main'"/>
    <AdventureListPage  v-if="currPage==='adventure_list'"/>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import LoginPage from "./pages/LoginPage.vue";
import MainPage from './pages/MainPage.vue'
import AdventureListPage from './pages/AdventureListPage.vue'
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {LoginPage, MainPage, AdventureListPage},
  mounted() {

  },
  computed: mapState(['currPage']),

}
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;

}
</style>
