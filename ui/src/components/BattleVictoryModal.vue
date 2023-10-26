<script>
import {mapMutations} from "vuex";

export default {
  name: "BattleVictoryModal",
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setShowBattleVictory']),
    onClickClose() {
      this.setShowBattleVictory(false);
    }
  }
}
</script>

<template>
  <div class="alertmodel">
    <div class="center center2">
      <div class="close" @click="onClickClose"></div>
      <div class="icon mb80"><img src="@/assets/images/tit3.png" alt=""></div>
      <div class="dec2">you defeated the monster!</div>
      <div class="title2">Emergency</div>
      <div class="dec2">
        While logging, cut finger <img src="@/assets/images/heart.png" alt=""> <b>-10</b>
      </div>
      <div class="title2">Attributes</div>
      <div class="dec2 mb40">
        Power <span>+99</span> Luck <b>-99</b>
      </div>
      <div class="btns">
        <button class="btn2" @click="onClickClose">confirm</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>