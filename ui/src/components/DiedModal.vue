<script>

import {mapMutations} from "vuex";

export default {
  name: 'DiedModal',
  components: {},
  mounted() {

  },
  computed: {},
  methods: {
    ...mapMutations(['setShowInformation', 'setCurrPage']),
    onClick() {
      this.setCurrPage('login');
    }
  }
}
</script>

<template>
  <div class="alertmodel">
    <div class="center center3">
      <div class="close"></div>

      <div class="icon"><img src="@/assets/images/titleimg2.png" alt=""></div>

      <div class="dec2">
        Attacked by monsters <img src="@/assets/images/heart.png" alt=""> <b>-10</b>
      </div>

      <div class="dec3">Your character has died and will return to the character list</div>

      <div class="btns">
        <button class="btn2" @click="onClick">confirm</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>