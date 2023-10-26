<script>
export default {
  name: "BattleMask",
  data() {
    return {
      countdownSeconds: 15,
      countdownInterval: null
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.countdownSeconds / 60);
      const seconds = this.countdownSeconds % 60;
      return `${this.addLeadingZero(minutes)}:${this.addLeadingZero(seconds)}`;
    }
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds--;
        } else {
          clearInterval(this.countdownInterval);
        }
      }, 1000);
    },
    addLeadingZero(value) {
      return value < 10 ? `0${value}` : value;
    }
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    clearInterval(this.countdownInterval);
  }
}
</script>

<template>
  <div class="alertmodel">
    <div class="center3">
      <div class="icon"><img src="@/assets/images/iconpis.png" alt=""></div>
      <div class="line"></div>
      <div class="tit">Failed to escape, entered into battle...</div>
      <div class="time">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>