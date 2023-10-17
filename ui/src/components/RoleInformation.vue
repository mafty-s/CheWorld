<template>
  <div class="creatMain" style="z-index: 2;background: none" @click="close">
    <div class="content3 itemNase">
      <div class="title">
        <img src="@/assets/images/title.png" alt="">
      </div>
      <div class="con">
        <div class="left">
          <div class="dec1">
            <p>
            <span class="s1">
              <span class="icon"><img src="@/assets/images/icon1.png" alt=""></span>
              <span class="ti">Vitality</span>
            </span>
              <span class="s2">100/100</span>
            </p>
            <p>
            <span class="s1">
              <span class="icon"><img src="@/assets/images/icon2.png" alt=""></span>
              <span class="ti">Morality</span>
            </span>
              <span class="s2">90/90</span>
            </p>
          </div>
          <div class="dec2">
            <p>
              <span class="s1">Strength</span>
              <span class="s2">50</span>
            </p>
            <p>
              <span class="s1">Agility</span>
              <span class="s2">50</span>
            </p>
            <p>
              <span class="s1">Wisdom</span>
              <span class="s2">50</span>
            </p>
            <p>
              <span class="s1">Intelligence</span>
              <span class="s2">50</span>
            </p>
            <p>
              <span class="s1">Luck</span>
              <span class="s2">50</span>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="title">{{name}}}</div>
          <img src="@/assets/images/people.png" class="people" alt="">
          <button class="btn">Start Adventure</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'RoleInformation',
  components: {},
  mounted() {

  },
  data() {
    return {
      name: "",
      Strength: 0,
      Dexterity: 0,
      Vitality: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
      Luck: 0,
    }
  },
  methods: {
    ...mapMutations(['setShowInformation']),
    close() {
      this.setShowInformation(false)
    }
  }
}
</script>

<style>

</style>