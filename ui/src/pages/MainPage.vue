<template>
  <div class="game">
    <div class="people" style="cursor: pointer" @click="openCrafting"></div>
    <div class="people" style="cursor: pointer;left: 20%;"></div>

    <div class="leftInfor">
      <div class="user" style="cursor: pointer" @click="openInformation"><img src="@/assets/images/user.png" alt="">
      </div>
      <div class="infor">
        <div class="name">{{ adventurer.name }}</div>
        <router-link to="/">
          <div class="Wallet">Wallet</div>
        </router-link>
      </div>
    </div>
    <div class="typeItem type1">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon1.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type2" style="top:120px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type3" style="top:220px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="controls">
      <ul>
        <li>
          <img src="images/set1.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="images/set2.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="images/set3.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="images/set4.png" alt="">
          <div class="num">99</div>
        </li>
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
    <RoleInformation v-show="showInformation"/>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import Crafting from "../components/Crafting.vue";
import RoleInformation from "../components/RoleInformation.vue";

export default {
  name: 'MainPage',
  components: {
    Crafting, RoleInformation
  },
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting", "showInformation",'adventurer']),
  data() {
    return {}
  },
  methods: {
    ...mapActions(['connect_wallet',]),
    ...mapMutations(['setShowCrafting', "setShowInformation"]),
    openCrafting() {
      this.setShowCrafting(true);
    },
    openInformation() {
      this.setShowInformation(true)
    }
  }
}
</script>


<style scoped>

</style>