<template>
  <div>
    <div class="login">
      <div class="imgbox"
           style="background: url(/images/login.jpg) no-repeat center center;background-size: cover;"></div>
      <div class="center">
        <div class="logo"><img src="images/logo.png" alt=""></div>
        <div class="btns">
          <div class="btn1"><a href="javascript;" @click="connect_wallet">WALLET LOGIN</a></div>
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

import {mapState, mapActions} from 'vuex'
import {connect} from "@argent/get-starknet";

export default {
  name: 'LoginPage',
  components: {},
  mounted() {

  },
  computed: mapState({

  }),
  data() {
    return {}
  },
  methods: {
    ...mapActions(['connect_wallet']),
  }
}
</script>


<style scoped>

</style>