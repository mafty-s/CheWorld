<template>

  <div class="game">
    <ElButton @click="test">test</ElButton>
    <ElButton @click="onClickAttack">attack</ElButton>
    <ElButton @click="onClickFlee">flee</ElButton>
    <ElButton @click="onClickExplore">explore</ElButton>
    <ElButton @click="onClickUpgrade">upgrade</ElButton>

    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
      <el-input v-model="txid" placeholder="Please input tx hash" />
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


    <div class="people people1" @click="openCrafting">
      <img src="@/assets/images/people.png" alt="">
    </div>

    <div class="people people2" @click="onClickEnterWorld">
      <div class="infor">
        <div class="name">Jacob</div>
        <div class="pos">Exchange Administrator</div>
      </div>
      <img src="@/assets/images/people2.png" alt="">
    </div>
    <div class="people people3">
      <div class="infor">
        <div class="name">Jacob</div>
        <div class="pos">Exchange Administrator</div>
      </div>
      <img src="@/assets/images/people3.png" alt="">
    </div>
    <div class="people people4">
      <div class="infor">
        <div class="name">Jacob</div>
        <div class="pos">Exchange Administrator</div>
      </div>
      <img src="@/assets/images/people4.png" alt="">
    </div>

<!--    <div class="people" style="cursor: pointer" ></div>-->
<!--    <div class="people" style="cursor: pointer;left: 20%;"></div>-->

    <div class="leftInfor">
      <div class="user" style="cursor: pointer" @click="openInformation"><img src="@/assets/images/user.png" alt="">
      </div>
      <div class="infor">
        <div class="name">{{ adventurer.name }}</div>
        <div class="Wallet" @click="onClickWallet">Wallet</div>
      </div>
    </div>
    <div class="typeItem type1">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon1.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type2" style="top:120px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="typeItem type3" style="top:220px">
      <div class="add"></div>
      <div class="ov">
        <div class="icon"><img src="@/assets/images/icon2.png" alt=""></div>
        <div class="val">20/90</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="controls">
      <ul>
        <li>
          <img src="@/assets/images/set1.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="@/assets/images/set2.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="@/assets/images/set3.png" alt="">
          <div class="num">99</div>
        </li>
        <li>
          <img src="@/assets/images/set4.png" alt="">
          <div class="num">99</div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Crafting v-show="showCrafting"/>
    <RoleInformation v-show="showInformation"/>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import Crafting from "../components/Crafting.vue";
import RoleInformation from "../components/RoleInformation.vue";

export default {
  name: 'MainPage',
  components: {
    Crafting, RoleInformation
  },
  mounted() {

  },
  computed: mapState(['wallet_address', "showCrafting", "showInformation", 'adventurer']),
  data() {
    return {
      dialogVisible:false,
      txid:"",
    }
  },
  methods: {
    ...mapActions(['connect_wallet', 'getReceipt', 'attack', 'explore', 'flee', 'upgrade']),
    ...mapMutations(['setShowCrafting', "setShowInformation", 'setCurrPage']),
    handleClose(done) {
      this.dialogVisible = false
    },
    async test() {
      this.dialogVisible=true
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
        currenUpgrades:currenUpgrades,
        potions:potions,
        items:items
      });
    },
    openCrafting() {
      this.setShowCrafting(true);
    },
    openInformation() {
      this.setShowInformation(true)
    },
    onClickWallet() {
      this.setCurrPage('login');
    },
    onClickEnterWorld() {
      this.setCurrPage('world');
    }
  }
}
</script>


<style scoped>

</style>