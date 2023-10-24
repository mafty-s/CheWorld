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
            <div class="tit">LV 999</div>
            <div class="val">
              <em></em>
            </div>
          </div>
          <div class="Point">
            <div class="s1">Point</div>
            <div class="s2">9</div>
          </div>
          <div class="peopleDetail">
            <img src="@/assets/images/people.png" class="" style="    display: block;
    margin: auto;
    height: 299px;
    margin-bottom: 33px;" alt="">
            <div class="list">
              <ul>
                <li>
                  <div class="s1">Strength</div>
                  <div class="s2">{{ adventurer.strength }}</div>
                  <div class="s3"></div>
                </li>
                <li>
                  <div class="s1">Dexterity</div>
                  <div class="s2">{{ adventurer.dexterity }}</div>
                  <div class="s3"></div>
                </li>
                <li>
                  <div class="s1">Wisdom</div>
                  <div class="s2">{{ adventurer.wisdom }}</div>
                  <div class="s3"></div>
                </li>
                <li>
                  <div class="s1">Intelligence</div>
                  <div class="s2">{{ adventurer.intelligence }}</div>
                  <div class="s3"></div>
                </li>
                <li>
                  <div class="s1">Charisma</div>
                  <div class="s2">{{ adventurer.charisma }}</div>
                  <div class="s3 grey"></div>
                </li>
                <li>
                  <div class="s1">Vitality</div>
                  <div class="s2">{{ adventurer.vitality }}</div>
                  <div class="s3 grey"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <div class="creatMain" style="z-index: 2;background: none" @click="close">-->
  <!--    <div class="content3 itemNase">-->
  <!--      <div class="title">-->
  <!--        <img src="@/assets@/assets@/assets/images///title.png" alt="">-->
  <!--      </div>-->
  <!--      <div class="con">-->
  <!--        <div class="left">-->
  <!--          <div class="dec1">-->
  <!--            <p>-->
  <!--            <span class="s1">-->
  <!--              <span class="icon"><img src="@/assets@/assets@/assets/images///icon1.png" alt=""></span>-->
  <!--              <span class="ti">Vitality</span>-->
  <!--            </span>-->
  <!--              <span class="s2">100/100</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--            <span class="s1">-->
  <!--              <span class="icon"><img src="@/assets@/assets@/assets/images///icon2.png" alt=""></span>-->
  <!--              <span class="ti">Morality</span>-->
  <!--            </span>-->
  <!--              <span class="s2">90/90</span>-->
  <!--            </p>-->
  <!--          </div>-->
  <!--          <div class="dec2">-->
  <!--            <p>-->
  <!--              <span class="s1">Strength</span>-->
  <!--              <span class="s2">{{adventurer.strength}}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Dexterity</span>-->
  <!--              <span class="s2">{{ adventurer.dexterity }}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Wisdom</span>-->
  <!--              <span class="s2">{{ adventurer.wisdom }}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Intelligence</span>-->
  <!--              <span class="s2">{{adventurer.intelligence}}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Charisma</span>-->
  <!--              <span class="s2">{{adventurer.charisma}}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Vitality</span>-->
  <!--              <span class="s2">{{adventurer.vitality}}</span>-->
  <!--            </p>-->
  <!--            <p>-->
  <!--              <span class="s1">Luck</span>-->
  <!--              <span class="s2">{{ adventurer.luck }}</span>-->
  <!--            </p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="right">-->
  <!--          <div class="title">{{adventurer.name}}</div>-->
  <!--          <img src="@/assets@/assets@/assets/images///people.png" class="people" alt="">-->
  <!--&lt;!&ndash;          <button class="btn">Start Adventure</button>&ndash;&gt;-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
    return {}
  },
  methods: {
    ...mapMutations(['setShowInformation']),
    onClockClose() {
      this.setShowInformation(false)
    },

  }
}
</script>

<style>

</style>