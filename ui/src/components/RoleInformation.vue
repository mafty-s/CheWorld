<template>
  <div class="alertmodel">
    <div class="center center4">
      <div class="close" @click="onClockClose"></div>
      <div class="titlero">
        <img src="@/assets/images/title3.png" alt="">
      </div>
      <div class="con">
        <div class="left2">
          <div class="titles">
            equips
          </div>
          <div class="list">
            <ul>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd1.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd2.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd3.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd4.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd5.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
              <li>
                <div class="s1">
                  <div class="icon"><img src="@/assets/images/fd6.png" alt=""></div>
                  <div class="tit">Feathered Crest</div>
                </div>
                <div class="s2">
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                  <p>Healthy:+20</p>
                  <p>power:+20</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="xt">
            <div class="tit">LV {{ calculateLevel(this.adventurer.xp) }}</div>
            <div class="val">
              <em></em>
            </div>
          </div>
          <div class="Point">
            <div class="s1">Point</div>
            <div class="s2">{{ this.point.toString() }}</div>
          </div>
          <div class="peopleDetail">
            <img src="@/assets/images/people.png" class="" style="    display: block;
    margin: auto;
    height: 299px;
    margin-bottom: 33px;" alt="">
            <div class="list">
              <ul>
                <li v-for="(value, key) in stat_desc" :key="key">
                  <div class="s1">{{ key }}</div>
                  <div class="s2">{{ stat(key) }}</div>
                  <div class="s3" @click="onClickAddState(key)"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="btns">
            <button class="btn2" @click="onClickUpgrade">confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {stat_desc} from "../config/stat.js";

export default {
  name: 'RoleInformation',
  components: {},
  mounted() {
    this.init();
  },
  computed: {
    stat_desc() {
      return stat_desc
    },
    ...mapState(['adventurer']),

  },
  data() {
    return {
      currenUpgrades: {
        Strength: 0,
        Dexterity: 0,
        Vitality: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
        Luck: 0
      },
      point: 0,
    }
  },

  methods: {
    ...mapMutations(['setShowInformation']),
    ...mapActions(['upgrade']),
    init(){
      console.log(this.adventurer);
      this.currenUpgrades={
        Strength: 0,
            Dexterity: 0,
            Vitality: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0,
            Luck: 0
      };
      this.point= (Number)(this.adventurer.statUpgrades);
    },
    calculateLevel(xp) {
      return Math.max(Math.floor(Math.sqrt(xp)), 1);
    },
    stat: function (key) {
      return this.adventurer[key.toLowerCase()] + this.currenUpgrades[key];
    },
    onClockClose() {
      this.setShowInformation(false)
    },
    onClickAddState(key) {
      console.log(key,this.point);
      if (isNaN(this.point) || this.point <= 0) {
        return;
      }
      this.point--;
      this.currenUpgrades[key]++;
    },
    async onClickUpgrade() {
      const potions = 0;
      const items = [];
      await this.upgrade({
        currenUpgrades: this.currenUpgrades,
        potions: potions,
        items: items
      });
    },
  }
}
</script>

<style>

</style>