<template>
  <div class="game">
    <div class="people" @click="openCrafting"></div>
    <div class="leftInfor">
      <div class="user"><img src="images/user.png" alt=""></div>
      <div class="infor">
        <div class="name">{{ wallet_address }}</div>
        <router-link to="/"><div class="Wallet">Wallet</div></router-link>
      </div>
    </div>
    <div class="typeItem type1">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="images/icon1.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type2" style="top:120px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type3" style="top:220px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="controls">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Crafting v-show="showCrafting"/>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import Crafting from "../components/Crafting.vue";

export default {
  name: 'MainPage',
  components: {
    Crafting
  },
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting"]),
  data() {
    return {}
  },
  methods: {
    ...mapActions(['connect_wallet',]),
    ...mapMutations(['setShowCrafting']),
    openCrafting() {
      this.setShowCrafting(true);
    }
  }
}
</script>


<style scoped>

</style>