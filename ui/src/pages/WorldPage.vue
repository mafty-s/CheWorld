<template>
  <div class="game map">

    <div class="userInfor2">
      <div class="bg">
        <div class="items1">
          <div class="item">
            <img src="@/assets/images/gold1.png" alt="">
            <span>999999</span>
            <a href="javascript:;" class="add"></a>
          </div>
          <div class="item">
            <img src="@/assets/images/gold2.png" alt="">
            <span>999999</span>
            <a href="javascript:;" class="add"></a>
          </div>
        </div>
        <div class="items2">
          <div class="item">
            <img src="@/assets/images/gold3.png" alt="">
            <span>9999</span>
          </div>
          <div class="item">
            <img src="@/assets/images/gold4.png" alt="">
            <span>9999</span>
          </div>
          <div class="item">
            <img src="@/assets/images/gold5.png" alt="">
            <span>9999</span>
          </div>
        </div>
      </div>
    </div>


    <div class="mapContent zoomable-div">
      <div class="blocks">


        <div class="block block1 ui1">
          <div class="text">
            Iron ore <br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui1.png" alt="">
          </div>
          <div class="dot"></div>
        </div>

        <div class="block block2 ui2" @click="onClickAttack">
          <div class="text">
            Wild boar <br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui2.png" alt="">
          </div>
          <div class="dot"></div>
        </div>
        <div class="block block3 ui2">
          <div class="text">
            Wild boar <br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui2.png" alt="">
          </div>
          <div class="dot"></div>
        </div>
        <div class="block block4 ui3">
          <div class="text">
            Elm wood<br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui3.png" alt="">
          </div>
          <div class="dot"></div>
        </div>
        <div class="block block5 ui1">
          <div class="text">
            Iron ore<br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui1.png" alt="">
          </div>
          <div class="dot"></div>
        </div>

        <div class="block block6 ui2">
          <div class="text">
            Wild boar<br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui2.png" alt="">
          </div>
          <div class="dot"></div>
        </div>
        <div class="block block7 ui4">
          <div class="text">
            Apple<br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui4.png" alt="">
          </div>
          <div class="dot"></div>
        </div>

        <div class="block block8 ui3" @click="onClick">
          <div class="text">
            Elm wood<br>99/100
          </div>
          <div class="icon">
            <img src="@/assets/images/ui3.png" alt="">
          </div>
          <div class="dot"></div>
        </div>

        <div class="centerPeople">
          <img src="@/assets/images/userimg.png" alt="">
        </div>

        <div class="home" @click="onClickBackHome"><img src="@/assets/images/home.png" alt=""></div>

        <div class="homePosition" @click="onClickBackHome"><i></i><img src="@/assets/images/home.png" alt=""></div>


      </div>
    </div>


    <div class="sideInfor">
      <div class="switch"></div>
      <div class="infor">
        <div class="icon"><img src="@/assets/images/action_icon_logging.png" alt=""></div>
        <div class="title1">In the process of logging...</div>
        <div class="time">{{ countdown }}</div>
        <div class="decs">
          <p>
            <span class="s1">10:20</span>
            <span class="s2">some text more and more ,maybe some fighting</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
          <p>
            <span class="s1">10:20</span>
            <span class="s2">high-quality wood x99</span>
          </p>
        </div>
      </div>
    </div>


    <AvatarComponent/>


    <div class="typeItem type0">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon1.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>

    <div class="typeItem type2" style="top:150px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>


    <ShortcutBar/>
    <MissionCompleteModal v-if="showMissionCompleted"/>
    <RoleInformation v-show="showInformation"/>
  </div>
</template>


<script>
import $ from 'jquery';
import {mapActions, mapMutations, mapState} from "vuex";
import MissionCompleteModal from "../components/MissionCompleteModal.vue";
import ShortcutBar from "../components/ShortcutBar.vue";
import AvatarComponent from "../components/AvatarComponent.vue";
import RoleInformation from "../components/RoleInformation.vue";

export default {
  name: 'WorldPage',
  components: {RoleInformation, AvatarComponent, MissionCompleteModal, ShortcutBar},
  computed: mapState(['wallet_address', "adventurers", "showMissionCompleted", "showInformation"]),
  mounted() {
    var scale = 1.0; // 初始缩放比例
    var maxScale = 2.0; // 最大缩放比例
    var minScale = 0.5; // 最小缩放比例
    var step = 0.01; // 缩放步长

    $(".zoomable-div").on("wheel", function (event) {
      // 阻止页面滚动
      event.preventDefault();

      // 获取鼠标滚轮事件的 deltaY 值，正值表示向上滚动，负值表示向下滚动
      var delta = event.originalEvent.deltaY;

      // 计算新的缩放比例
      scale += (delta > 0) ? -step : step;

      // 限制缩放比例在最大和最小值之间
      if (scale > maxScale) {
        scale = maxScale;
      } else if (scale < minScale) {
        scale = minScale;
      }

      // 应用缩放
      $(this).css({
        transform: "scale(" + scale + ")"
      });
    });


    $('.sideInfor .switch').click(function () {
      $('.sideInfor').toggleClass('current')
    })

    this.startCountdown();

  },
  data() {
    return {
      targetTime: new Date().getTime() + 60000, // 设置目标时间为当前时间的1分钟后
      countdown: '00:00' // 初始倒计时显示为"00:00"
    };
  },
  methods: {
    ...mapMutations(['setShowMissionCompleted', 'setCurrPage']),
    ...mapActions(['connect_wallet', 'getReceipt', 'attack', 'explore', 'flee', 'upgrade']),
    async onClick() {
      this.setShowMissionCompleted(true);
    },
    async onClickAttack() {
      await this.attack(false, null);
    },
    async onClickBackHome() {
      this.setCurrPage('main');
    },
    startCountdown() {
      setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(this.targetTime - currentTime, 0);
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime / 1000) % 60);
        this.countdown = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
      }, 1000);
    },
    formatTime(time) {
      return String(time).padStart(2, '0');
    }
  }
}

</script>


<style scoped>

</style>