<script>

import {mapState} from "vuex";

export default {
  name: 'FloatingBall',
  components: {},

  mounted() {

  },
  computed: mapState(['wallet_address', "adventurer",]),
  data() {
    return {}
  },
  methods: {
    getMaxHealth() {
      const vitality = this.adventurer.vitality ?? 0;
      const maxHealth = Math.min(100 + vitality * 10, 720);
      return maxHealth;
    }
  }
}
</script>

<template>
  <div>
    <div class="typeItem type0">
      <!--      <div class="add"></div>-->
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon1.png" alt=""></div>
        <div class="val">{{ adventurer.health }}/{{ getMaxHealth() }}</div>
        <div class="line" :style="[{ height: (adventurer.health / getMaxHealth()) * 100 + '%' }]"></div>
      </div>
    </div>

    <div class="typeItem type2" style="top:150px">
      <!--      <div class="add"></div>-->
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">0/0</div>
        <div class="line" style="height: 0%"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>