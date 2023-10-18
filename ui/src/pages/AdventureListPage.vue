<template>
  <!--  <ElButton @click="connect_wallet">conn</ElButton>-->
  <!--  <ElButton @click="spawn">spawn</ElButton>-->
  <!--    <ElButton @click="test">test</ElButton>-->
  <div class="creatMain">
    <!--    <a href="#" class="Skip">Skip</a>-->
    <div class="contBase  itemNase " v-if="step===1" @click="nextStep">
      <div class="title">A mysterious voice:</div>
      <div class="text">
        Welcome to the land of Talas, brave adventurer!
      </div>
      <div class="next"></div>
    </div>
    <div class="content2 itemNase" v-if="step===2">
      <input type="text" placeholder="Some text about user name" class="words" v-model="name">
      <div class="warning">*Some text about error tips</div>
      <button class="btnBase" @click="nextStep">CONFIRM</button>
    </div>
    <div class="contBase itemNase" v-if="step===3" @click="nextStep">
      <div class="title">A mysterious voice:</div>
      <div class="text">
        Talas is located in the southeastern corner of the world, brimming with mystery and magic. It holds valuable
        mineral resources, especially the enigmatic 'Nightstone,' which draws adventurers.
      </div>
      <div class="next"></div>
    </div>
    <div class="itemNase step3" v-if="step===4 && getCurrQuesting()!=null">
      <div class="contBase">
        <div class="title">A mysterious voice:</div>
        <div class="text">
          {{ getCurrQuesting().question }}
        </div>
        <div class="next"></div>
      </div>
      <div class="listItems">
        <ul>
          <li @click="awser(0)">
            <div class="num">A</div>
            <div class="ri"> {{ getCurrQuesting().awnser[0].text }}</div>
          </li>
          <li @click="awser(1)">
            <div class="num">B</div>
            <div class="ri">{{ getCurrQuesting().awnser[1].text }}</div>
          </li>
          <li @click="awser(2)">
            <div class="num">C</div>
            <div class="ri">{{ getCurrQuesting().awnser[2].text }}</div>
          </li>
          <li @click="awser(3)">
            <div class="num">D</div>
            <div class="ri">{{ getCurrQuesting().awnser[3].text }}</div>
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
              <span class="ti">HP</span>
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
               <span class="s1">
                 <span class="title">Strength</span>
                 <span class="slide">The wisdom attribute represents a character's wisdom and insight. Characters with high wisdom excel at solving puzzles and making wise decisions. In the game, wisdom influences dialogues, decisions, and a character's learning speed.</span>
               </span>
               <span class="s2">{{ Strength }}</span>
            </p>
            <p>
              <span class="s1">Dexterity</span>
              <span class="s2">{{ Dexterity }}</span>
            </p>
            <p>
              <span class="s1">Wisdom</span>
              <span class="s2">{{ Wisdom }}</span>
            </p>
            <p>
              <span class="s1">Intelligence</span>
              <span class="s2">{{ Intelligence }}</span>
            </p>
            <p>
              <span class="s1">Charisma</span>
              <span class="s2">{{ Charisma }}</span>
            </p>
            <p>
              <span class="s1">Vitality</span>
              <span class="s2">{{ Vitality }}</span>
            </p>
            <p>
              <span class="s1">Luck</span>
              <span class="s2">{{ Luck }}</span>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="title">{{ name }}</div>
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
import {getQuesting} from "../config/questing.js";
import {getRandomNumberIn} from "../utils/index.js";

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
      questings: getQuesting(),
      questingIndex: 0,
      step: 1,
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
    ...mapActions(['connect_wallet', 'start', 'getReceipt']),
    ...mapMutations(['']),
    async test() {
      await this.getReceipt('0x122d02675d0e6041b992d6f05e70b58c2911f13a967b9acb2a5fc2f00ac5470');
      this.$router.push('/main')
    },
    async enter() {
      await this.spawn();
      this.$router.push('/main')
    },
    getCurrQuesting() {
      return this.questings[this.questingIndex];
    },
    nextStep() {
      this.step++;
    },
    awser(value) {

      let a = this.getCurrQuesting().awnser[value];
      switch (a.target) {
        case 'strength':
          this.Strength += getRandomNumberIn(a.min, a.max)
          break;
        case 'dexterity':
          this.Dexterity += getRandomNumberIn(a.min, a.max)
          break;
        case 'vitality':
          this.Vitality += getRandomNumberIn(a.min, a.max)
          break;
        case 'intelligence':
          this.Intelligence += getRandomNumberIn(a.min, a.max)
          break;
        case 'wisdom':
          this.Wisdom += getRandomNumberIn(a.min, a.max)
          break;
        case 'luck':
          this.Luck += getRandomNumberIn(a.min, a.max)
          break;
        case 'charisma':
          this.Charisma += getRandomNumberIn(a.min, a.max)
          break;
      }


      if ((this.questingIndex + 1) >= this.questings.length) {
        this.step++;
      } else {
        this.questingIndex++;
      }
      // this.step++;
    },
    async spawn() {
      await this.start({
        startingStrength: this.Strength,
        startingDexterity: this.Dexterity,
        startingVitality: this.Vitality,
        startingIntelligence: this.Intelligence,
        startingWisdom: this.Wisdom,
        startingCharisma: this.Charisma,
        // startingStrength: 1,
        // startingDexterity: 1,
        // startingVitality: 1,
        // startingIntelligence: 1,
        // startingWisdom: 1,
        // startingCharisma: 1,
        name: this.name,
        startingWeapon: 16,
        class: 1
      });
    }
  }
}

</script>

<style scoped>

</style>xian