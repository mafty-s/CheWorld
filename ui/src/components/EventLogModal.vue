<script>
import {mapMutations, mapState} from "vuex";
import $ from "jquery";

export default {
  name: 'EventLogModal',
  components: {},
  mounted() {

    const timestamp = this.adventurer.resources.last_timestamp + 600;
    this.targetTime = new Date(timestamp * 1000);

    this.formatLogs();
    this.startCountdown();

    // $('.sideInfor .switch').click(function () {
    //   $('.sideInfor').toggleClass('current')
    // })

  },
  computed: mapState(['wallet_address', "adventurer","showLogModal"]),
  data() {
    return {
      targetTime: new Date().getTime() + 6000000, // 设置目标时间为当前时间的1分钟后
      countdown: '00:00',
      logs: [
        {
          time: '08:00',
          content: 'Beast',
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['setShowLogModal']),
    formatLogs() {
      let battle_logs = this.adventurer.battles;
      for (let i = 0; i < battle_logs.length; i++) {
        let battle_log = battle_logs[i];
        //let content =
      }
    },
    startCountdown() {
      setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(this.targetTime - currentTime, 0);
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime / 1000) % 60);
        this.countdown = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
      }, 1000);
    },
    formatTime(time) {
      return String(time).padStart(2, '0');
    },
    onClickSwitch() {
      this.setShowLogModal(!this.showLogModal);
    }
  }
}
</script>

<template>
  <div :class="[showLogModal===true ? 'sideInfor current' : 'sideInfor',]">
    <div class="switch" @click="onClickSwitch"></div>
    <div class="infor">
      <div class="icon"><img src="@/assets/images/action_icon_logging.png" alt=""></div>
      <div class="title1">In the process of logging...</div>
      <div class="time">{{ countdown }}</div>
      <div class="decs">
        <p v-for="(log, index) in adventurer.logs.slice().reverse()" :key="index">
          <a :href="'https://testnet.starkscan.co/tx/'+log.tx_hash " target="_blank">
            <span class="s1">{{ log.time }}</span>
            <span class="s2">{{ log.context }}</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: white;
}
</style>