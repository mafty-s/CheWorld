<template>
  <ElButton @click="connect_wallet">conn</ElButton>
  <ElButton @click="spawn"></ElButton>
</template>

<script>


import Crafting from "../components/Crafting.vue";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'AdventureListPage',
  components: {
    Crafting
  },
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting"]),
  data() {
    return {}
  },
  methods: {
    ...mapActions(['connect_wallet', 'start']),
    ...mapMutations(['']),
    async spawn() {
      await this.start({
        startingStrength: 1,
        startingDexterity: 1,
        startingVitality: 1,
        startingIntelligence: 1,
        startingWisdom: 1,
        startingCharisma: 1,
        name: "abc",
        startingWeapon: 16,
        class:1
      });
    }

  }
}

</script>

<style scoped>

</style>xian