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
              <span class="s2">{{adventurer.strength}}</span>
            </p>
            <p>
              <span class="s1">Dexterity</span>
              <span class="s2">{{ adventurer.dexterity }}</span>
            </p>
            <p>
              <span class="s1">Wisdom</span>
              <span class="s2">{{ adventurer.wisdom }}</span>
            </p>
            <p>
              <span class="s1">Intelligence</span>
              <span class="s2">{{adventurer.intelligence}}</span>
            </p>
            <p>
              <span class="s1">Charisma</span>
              <span class="s2">{{adventurer.charisma}}</span>
            </p>
            <p>
              <span class="s1">Vitality</span>
              <span class="s2">{{adventurer.vitality}}</span>
            </p>
            <p>
              <span class="s1">Luck</span>
              <span class="s2">{{ adventurer.luck }}</span>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="title">{{adventurer.name}}</div>
          <img src="@/assets/images/people.png" class="people" alt="">
<!--          <button class="btn">Start Adventure</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: 'RoleInformation',
  components: {},
  mounted() {

  },
  computed: mapState(['adventurer']),
  data() {
    return {
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