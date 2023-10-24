<script >
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'AvatarComponent',
  components: {},
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting", "showInformation", 'adventurer']),
  methods: {
    ...mapMutations(['setShowInformation', 'setCurrPage']),

    openInformation() {
      this.setShowInformation(true)
    },
    onClickWallet() {
      this.setCurrPage('login');
    },
  }
}
</script>

<template>
  <div class="leftInfor">
    <div class="user" style="cursor: pointer" @click="openInformation"><img src="@/assets/images/user.png" alt="">
    </div>
    <div class="infor">
      <div class="name">{{ adventurer.name }}</div>
      <div class="Wallet" @click="onClickWallet">Wallet</div>
    </div>
  </div>
</template>

<style scoped>

</style>