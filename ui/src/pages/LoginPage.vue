<template>
  <div>
    <div class="login">
      <div class="imgbox"
           style="background: url(/images/login.jpg) no-repeat center center;background-size: cover;"></div>
      <div class="center">
        <div class="logo"><img src="@/assets/images/logo.png" alt=""></div>
        <div class="btns">
          <div class="btn1"><a href="javascript:;" @click="login_and_enter">WALLET LOGIN</a></div>
          <div class="btn2">
            <a href="#">social account</a>
            <a href="#">white papper</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions, mapMutations} from 'vuex'
import {getAdventure} from "../system/graphql.js";

export default {
  name: 'LoginPage',
  components: {},
  mounted() {

  },
  computed: mapState(['wallet_address']),
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setAdventures']),
    ...mapActions(['connect_wallet']),
    async login_and_enter(){
      await this.connect_wallet();
      let resp =  await getAdventure(this.wallet_address);
      console.log(resp)
      this.setAdventures(resp.data.adventurers);
      this.$router.push('/adventure_list')
    }
  }
}
</script>


<style scoped>

</style>