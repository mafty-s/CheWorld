<template>
  <div class="alertmodel">
    <div class="center center2">
      <div class="close" @click="onClick"></div>

      <div class="icon"><img src="@/assets/images/titleimg1.png" alt=""></div>
      <div class="title2">Emergency</div>
      <div class="dec2">
        While logging, cut finger <img src="@/assets/images/heart.png" alt="">    <b>-10</b>
      </div>

      <div class="title2">Resources</div>
      <div class="dec2">
        high-quality wood <img src="@/assets/images/uz1.png" alt="">    <span>+99</span>
      </div>

      <div class="title2">Attributes</div>
      <div class="dec2">
        Power <span>+99</span>  Luck    <b>-99</b>
      </div>
      <div class="btns">
        <button class="btn2" @click="onClick">confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: 'MissionCompleteModal',
  components: {},
  mounted() {

  },
  methods: {
    ...mapMutations(['setShowMissionCompleted', 'setCurrPage']),
    async onClick() {
      this.setShowMissionCompleted(false);
    },

  }
}
</script>

<style scoped>

</style>