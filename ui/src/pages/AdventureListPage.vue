<template>
  <ElButton></ElButton>
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
    ...mapActions(['',]),
    ...mapMutations(['']),

  }
}

</script>

<style scoped>

</style>xian