<script>
export default {
  name: 'EventLogModal',
  components: {},
  mounted() {
    this.startCountdown();
  },
  data() {
    return {
      targetTime: new Date().getTime() + 6000000, // 设置目标时间为当前时间的1分钟后
      countdown: '00:00',
      logs: [
        {
          time: '2023-09-22T14:57:31.870Z',
          content: 'Beast',
        }
      ]
    }
  },
  methods: {
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
    }
  }
}
</script>

<template>
  <div class="sideInfor">
    <div class="switch"></div>
    <div class="infor">
      <div class="icon"><img src="@/assets/images/action_icon_logging.png" alt=""></div>
      <div class="title1">In the process of logging...</div>
      <div class="time">{{ countdown }}</div>
      <div class="decs">
        <p>
          <span class="s1">10:20</span>
          <span class="s2">some text more and more ,maybe some fighting</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>