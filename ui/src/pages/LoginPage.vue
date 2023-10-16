<template>
  <div>
    <div class="login">
      <div class="imgbox"
           style="background: url(/images/login.jpg) no-repeat center center;background-size: cover;"></div>
      <div class="center">
        <div class="logo"><img src="images/logo.png" alt=""></div>
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

import {mapState, mapActions} from 'vuex'

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
    async login_and_enter(){
      await this.connect_wallet();
      this.$router.push('/main')

    }
  }
}
</script>


<style scoped>

</style>