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
      <div class="warning">* {{ err_msg }}
      </div>
      <button class="btnBase" @click="checkName()">CONFIRM</button>
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

    <div class="content3 itemNase" v-show="step===5">
      <div class="title">
        <img src="@/assets/images/title.png" alt="">
      </div>
      <div class="con">
        <div class="tab">

          <div v-for="index in range" :key="index">
            <a href="javascript:;" :class="[index===tabIndex ? 'current' : '',]" v-if="adventurers.length>index"
               @click="onClickHead(index)">
              <img src="@/assets/images/user.png" alt="">
              <span class="name">{{ adventurers[index].name }}</span>
            </a>
            <a href="javascript:;" :class="[index===tabIndex ? 'current' : '',]"
               :style="[index===tabIndex ? 'background:url(../images/role_button_add.png) no-repeat right center' : '']"
               v-else @click="onClickHead(index)"></a>
          </div>


        </div>
        <div v-show="content">
          <div class="left">
            <div class="dec1">
              <p>
            <span class="s1">
              <span class="icon"><img src="@/assets/images/icon1.png" alt=""></span>
              <span class="ti">HP</span>
            </span>
                <span class="s2">{{ getMaxHealth() }}/{{ getMaxHealth() }}</span>
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
                  <span class="tit">Strength</span>
                  <span class="slide">{{ stat_desc.Strength }}</span>
                </span>
                <span class="s2">{{ content?.Strength ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Dexterity</span>
                  <span class="slide">{{ stat_desc.Dexterity }}</span>
                </span>
                <span class="s2">{{ content?.Dexterity ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Wisdom</span>
                  <span class="slide">{{ stat_desc.Wisdom }}</span>
                </span>
                <span class="s2">{{ content?.Wisdom ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Intelligence</span>
                  <span class="slide">{{ stat_desc.Intelligence }}</span>
                </span>
                <span class="s2">{{ content?.Intelligence ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Charisma</span>
                  <span class="slide">{{ stat_desc.Charisma }}</span>
                </span>
                <span class="s2">{{ content?.Charisma ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Vitality</span>
                  <span class="slide">{{ stat_desc.Vitality }}</span>
                </span>
                <span class="s2">{{ content?.Vitality ?? 0 }}</span>
              </p>

              <p>
                <span class="s1">
                  <span class="tit">Luck</span>
                  <span class="slide">{{ stat_desc.Luck }}</span>
                </span>
                <span class="s2">{{ content?.Luck ?? 0 }}</span>
              </p>
            </div>
          </div>
          <div class="right">
            <div class="title">{{ content?.name }}</div>
            <img src="@/assets/images/people.png" class="people" alt="">
            <button class="btn" @click="enter" v-loading="loading" style="margin-top: 20px">Start Adventure</button>
          </div>
        </div>
        <div v-show="content===null" class="none">
          <div class="title">
            <p>
              Uh-oh! It's empty here！
            </p>
            <p>
              Create a character by answering questions!
            </p>
          </div>
          <button class="btn" @click="onClickCreateCharacter">Create Character</button>
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
import $ from 'jquery';
import {stat_desc} from "../config/stat.js";
import {ElMessage} from "element-plus";

export default {
  name: 'AdventureListPage',
  components: {
    Crafting
  },
  mounted() {

    $('.creatMain .content3 .con .left .dec2 p .s1 ').hover(function () {
      $(this).find('.slide').stop()
      $(this).find('.slide').slideToggle(200)
    })

    if (this.adventurers.length > 0) {
      this.step = 5;
      this.onClickHead(0)
    }
  },
  computed: mapState(['wallet_address', "adventurers",]),
  data() {
    return {
      err_msg: "The name can only contain uppercase or lowercase letters or numbers, with a maximum length of 6 digits",
      stat_desc: stat_desc,
      tabIndex: 0,
      range: [0, 1, 2, 3, 4],
      content: null,
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
      loading: false,
    }
  },
  methods: {
    ...mapActions(['connect_wallet', 'start', 'getReceipt']),
    ...mapMutations(['setAdventure', 'setCurrPage']),
    async test() {
      await this.getReceipt('0x122d02675d0e6041b992d6f05e70b58c2911f13a967b9acb2a5fc2f00ac5470');
      this.setCurrPage('main')
    },

    validateString(input) {
      const regex = /^[A-Za-z0-9]{1,6}$/;
      return regex.test(input);
    },

    async enter() {
      if (this.loading) {
        return;
      }
      this.loading = true
      try {
        if (this.content.id === 0) {
          await this.spawn();
        } else {
          this.setAdventure(this.adventurers[this.tabIndex])
        }
        this.setCurrPage('main')
      } finally {
        this.loading = false
      }
    },
    async onClickCreateCharacter() {
      this.step = 1;
    },
    getCurrQuesting() {
      return this.questings[this.questingIndex];
    },
    checkName() {
      let res = this.validateString(this.name);
      if (res) {
        this.step++;
      } else {
        ElMessage.error(this.err_msg)
      }
    },
    nextStep() {

      this.step++;
      if (this.step === 5) {
        $('.s1 ').hover(function () {
          alert(1)
          $(this).find('.slide').stop()
          $(this).find('.slide').slideToggle(200)
        })
        $('.slide').slideToggle(200)
      }
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
        this.content = {
          id: 0,
          name: this.name,
          Strength: this.Strength,
          Dexterity: this.Dexterity,
          Vitality: this.Vitality,
          Intelligence: this.Intelligence,
          Wisdom: this.Wisdom,
          Charisma: this.Charisma,
          Luck: 0,
        }
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
    },
    getMaxHealth() {
      const vitality = this.Vitality ?? 0;
      const maxHealth = Math.min(100 + vitality * 10, 720);
      return maxHealth;
    },

    async onClickHead(index) {
      this.tabIndex = index;
      if (index >= this.adventurers.length) {
        this.content = null
      } else {
        const ad = this.adventurers[index];
        console.log("ad", ad)
        this.content = {
          id: ad.id,
          name: ad.name,
          Strength: ad.strength,
          Dexterity: ad.dexterity,
          Vitality: ad.vitality,
          Intelligence: ad.intelligence,
          Wisdom: ad.wisdom,
          Charisma: ad.charisma,
          Luck: 0,
        }
      }
    }
  }
}

</script>

<style scoped>

</style>xian