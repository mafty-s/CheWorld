<template>
  <div class="alertModel">
    <div class="content">
      <div class="logo"><img src="images/logo2.png" alt=""></div>
      <div class="close" @click="closeCrafting"></div>
      <div class="tab" id="tab1">
        <div class="left">
          <div class="hd">
            <a href="javascript:;" :class="[craftingIndex===1 ? 'current' : '',]" @click="setCraftingIndex(1)">Equipment</a>
            <a href="javascript:;" :class="[craftingIndex===2 ? 'current' : '',]" @click="setCraftingIndex(2)">Food</a>
            <a href="javascript:;" :class="[craftingIndex===3 ? 'current' : '',]" @click="setCraftingIndex(3)">TOOLS</a>
            <a href="javascript:;" :class="[craftingIndex===4 ? 'current' : '',]" @click="setCraftingIndex(4)">Materials</a>
          </div>
          <div class="bd">
            <div class="model">
              <ul>
                <li v-for="(equipment,index) in currRole.bag.equipments" :key="index"  v-show="craftingIndex===1">
                    <h2 class="h2tit"><img :src="equipment.icon" alt=""><span>{{ equipment.name }}</span></h2>
                    <dl>
                      <dd>
                        <a href="#" class="dis">Helmet of Valor</a>
                      </dd>
                    </dl>
                </li>
                <li v-for="(food,index) in currRole.bag.foods" :key="index"  v-show="craftingIndex===2">
                  <h2 class="h2tit"><img :src="food.icon" alt=""><span>{{ food.name }}</span></h2>
                  <dl>
                    <dd>
                      <a href="#" class="dis">Helmet of Valor</a>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <div class="check">
            <span>Show craftable gea</span>
          </div>
        </div>
        <div class="right">
          <div class="type1">
            <div class="title">Ingredient Recipe</div>
            <div class="list">
              <ul>
                <li><img src="/images/user.png"/></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="title2"><img src="images/ic1.png" alt=""><span>Feathered Crest</span></div>
            <div class="num">
              <i class="ic1"></i>
              <input type="text" value="10" class="words">
              <i class="ic2"></i>
            </div>
            <a href="javascript:;" class="Craft">Craft</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'CraftingComponent',
  components: {},
  mounted() {

  },
  computed: mapState(['wallet_address', "currRole", "craftingIndex"]),
  data() {
    return {}
  },
  methods: {
    ...mapActions(['connect_wallet']),
    ...mapMutations(['setShowCrafting',"setCraftingIndex"]),
    closeCrafting() {
      this.setShowCrafting(false);
    }
  }
}
</script>

<style scoped>

</style>