<template>

  <div class="game">
<!--    <ElButton @click="test">test</ElButton>-->
<!--    <ElButton @click="onClickAttack">attack</ElButton>-->
<!--    <ElButton @click="onClickFlee">flee</ElButton>-->
<!--    <ElButton @click="onClickExplore">explore</ElButton>-->
<!--    <ElButton @click="onClickUpgrade">upgrade</ElButton>-->

    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
      <el-input v-model="txid" placeholder="Please input tx hash"/>
      <pre></pre>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onClickGetReceipt">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>


    <div class="people people1" @click="setShowInformation(true)">
      <img src="@/assets/images/people.png" alt="">
    </div>

    <div class="people people2" @click="showDialog">
      <div class="infor">
        <div class="name">Korsk</div>
        <div class="pos">Alchemist</div>
      </div>
      <img src="@/assets/images/people2.png" alt="">
    </div>
    <div class="people people3" @click="openCrafting">
      <div class="infor">
        <div class="name">Brando</div>
        <div class="pos">Blacksmith</div>
      </div>
      <img src="@/assets/images/people3.png" alt="">
    </div>
    <div class="people people4" @click="onClickEnterWorld">
      <div class="infor">
        <div class="name">Elwyn</div>
        <div class="pos">Hunter</div>
      </div>
      <img src="@/assets/images/people4.png" alt="">
    </div>

    <!--    <div class="people" style="cursor: pointer" ></div>-->
    <!--    <div class="people" style="cursor: pointer;left: 20%;"></div>-->

    <AvatarComponent/>
    <FloatingBall/>
    <ShortcutBar/>
    <Crafting v-if="showCrafting"/>
    <RoleInformation v-if="showInformation"/>
    <DiedModal v-if="showDeadModal"/>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import Crafting from "../components/Crafting.vue";
import RoleInformation from "../components/RoleInformation.vue";
import ShortcutBar from "../components/ShortcutBar.vue";
import AvatarComponent from "../components/AvatarComponent.vue";
import FloatingBall from "../components/FloatingBall.vue";
import DiedModal from "../components/DiedModal.vue";
import {ElNotification} from "element-plus";
import {DialogKorsk} from "../config/dialog.js";

export default {
  name: 'MainPage',
  components: {
    DiedModal,
    FloatingBall,
    AvatarComponent,
    Crafting, RoleInformation, ShortcutBar
  },
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting", "showInformation", "showDeadModal",'adventurer']),
  data() {
    return {
      dialogVisible: false,
      txid: "",
    }
  },
  methods: {
    ...mapActions(['connect_wallet', 'getReceipt', 'attack', 'explore', 'flee', 'upgrade', 'loadResources']),
    ...mapMutations(['setShowCrafting', "setShowInformation", 'setCurrPage']),
    handleClose(done) {
      this.dialogVisible = false
    },
    async test() {
      this.dialogVisible = true
      // await this.getReceipt('0x678d2d041fee01f3aa894c952c5b2eabc5360f457ef02a214007c511b55897b');
      // this.setCurrPage('main')
    },
    async onClickGetReceipt() {
      await this.getReceipt(this.txid);
    },
    async onClickAttack() {
      await this.attack(false, null);
    },
    async onClickExplore() {
      await this.explore(false);
    },
    async onClickFlee() {
      await this.flee(false, null);
    },
    async onClickUpgrade() {
      const currenUpgrades = {
        Strength: 1,
        Dexterity: 0,
        Vitality: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
        Luck: 0
      }
      const potions = 0;
      const items = [];
      await this.upgrade({
        currenUpgrades: currenUpgrades,
        potions: potions,
        items: items
      });
    },
    openCrafting() {
      this.setShowCrafting(true);
    },
    async onClickEnterWorld() {
      await this.loadResources();
      this.setCurrPage('world');
    },
    async showDialog(){
      const randomIndex = Math.floor(Math.random() * DialogKorsk.length);
      const msg= DialogKorsk[randomIndex].sentence;

      ElNotification({
        title: 'Korsk',
        message: msg
      })
    }
  }
}
</script>


<style scoped>

</style>