<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "BeastInfoModal",
  methods: {
    ...mapMutations(["setShowBeastInfoModal","setShowBattleMask"]),
    ...mapActions(["attack", "explore", 'flee']),
    onClickClose() {
      this.setShowBeastInfoModal(false)
    },
    async onClickAttack() {
      // this.setShowBattleMask(true)
      await this.attack(false, null);
      // this.setShowBattleMask(false)
    },
    async onClickFlee() {
      await this.flee(false, null)
    }
  }
}
</script>

<template>
  <div class="alertmodel">
    <div class="center type2">
      <div class="close" @click="onClickClose"></div>
      <div class="titleimg"><img src="@/assets/images/tit1.png" alt=""></div>
      <div class="dec">
        <p>
          Encountered a monster attack, <br>choose to fight or flee?
        </p>
      </div>
      <div class="btns">
        <button class="btn1" @click="onClickFlee">RUN AWAY</button>
        <button class="btn2" @click="onClickAttack">fighting</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>