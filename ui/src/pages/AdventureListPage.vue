<template>
  <!--  <ElButton @click="connect_wallet">conn</ElButton>-->
  <!--  <ElButton @click="spawn">spawn</ElButton>-->
  <!--  <ElButton @click="test">test</ElButton>-->
  <div class="creatMain">
<!--    <a href="#" class="Skip">Skip</a>-->
    <div class="contBase  itemNase " v-if="step===1"  @click="nextStep">
      <div class="title">A mysterious voice:</div>
      <div class="text">
        Welcome to the land of Talas, brave adventurer!
      </div>
      <div class="next"></div>
    </div>
    <div class="content2 itemNase" v-if="step===2">
      <input type="text" placeholder="Some text about user name" class="words">
      <div class="warning">*Some text about error tips</div>
      <button class="btnBase" @click="nextStep">CONFIRM</button>
    </div>
    <div class="contBase itemNase" v-if="step===3"  @click="nextStep">
      <div class="title">A mysterious voice:</div>
      <div class="text">
        Talas is located in the southeastern corner of the world, brimming with mystery and magic. It holds valuable
        mineral resources, especially the enigmatic 'Nightstone,' which draws adventurers.
      </div>
      <div class="next"></div>
    </div>
    <div class="itemNase step3"  v-if="step===4">
      <div class="contBase" >
        <div class="title">A mysterious voice:</div>
        <div class="text"  >
          Talas is located in the southeastern corner of the world, brimming with mystery and magic. It holds valuable
          mineral resources, especially the enigmatic 'Nightstone,' which draws adventurers.
        </div>
        <div class="next"></div>
      </div>
      <div class="listItems">
        <ul>
          <li @click="awser(0)">
            <div class="num">A</div>
            <div class="ri">Seek help and collaborate with other adventurers to solve the problem</div>
          </li>
          <li @click="awser(1)">
            <div class="num">B</div>
            <div class="ri">Quickly assess the situation, formulate a plan, and tackle the challenge alone</div>
          </li>
          <li @click="awser(2)">
            <div class="num">C</div>
            <div class="ri">Utilize your creativity and wisdom to find unconventional solutions.</div>
          </li>
          <li @click="awser(3)">
            <div class="num">D</div>
            <div class="ri">Seek out mysterious magic or treasures to address the crisis.</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content3 itemNase" v-if="step===5">
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
          <div class="title">Some text about name</div>
          <img src="@/assets/images/people.png" class="people" alt="">
          <button class="btn" @click="enter">Start Adventure</button>
        </div>
      </div>
    </div>
    <div class="shadow"></div>
  </div>
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
  computed: mapState(['wallet_address', "adventurers"]),
  data() {
    return {
      step: 1
    }
  },
  methods: {
    ...mapActions(['connect_wallet', 'start', 'getReceipt']),
    ...mapMutations(['']),
    enter() {
      this.$router.push('/main')
    },
    nextStep(){
      this.step++;
    },
    awser(value){
      this.step++;
    },
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
        class: 1
      });
    },
    async test() {
      await this.getReceipt("0x1f7e02d285bc972ab83f23d06a9b8b7618dad1868d1f345e7df172355ff29e1")
    }
  }
}

</script>

<style scoped>

</style>xian