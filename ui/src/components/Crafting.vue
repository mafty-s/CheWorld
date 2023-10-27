<template>
  <div class="alertModel">
    <div class="content">
      <div class="logo"><img src="@/assets/images/logo2.png" alt=""></div>
      <div class="close" @click="closeCrafting"></div>
      <div class="tab" id="tab1">
        <div class="left">
          <div class="hd">
            <a href="javascript:;" :class="[craftingIndex===1 ? 'current' : '',]"
               @click="setCraftingIndex(1)">Equipment</a>
            <a href="javascript:;" :class="[craftingIndex===2 ? 'current' : '',]" @click="setCraftingIndex(2)">Food</a>
            <a href="javascript:;" :class="[craftingIndex===3 ? 'current' : '',]" @click="setCraftingIndex(3)">TOOLS</a>
            <a href="javascript:;" :class="[craftingIndex===4 ? 'current' : '',]"
               @click="setCraftingIndex(4)">Materials</a>
          </div>
          <div class="bd">
            <div class="model">
              <ul>
                <li v-for="(equipment,index) in configs.equipments" :key="index" v-show="craftingIndex===1"
                    :class="[ equipment.showDetails ? 'current' : '' ]">
                  <h2 class="h2tit" @click="showDetail(index)"><img :src="equipment.icon" alt=""><span>{{
                      equipment.name
                    }}</span></h2>
                  <dl :style="{ display: equipment.showDetails ? 'block' : 'block' }">
                    <dd v-for="(item,index) in equipment.list" :key="index">
                      <a href="javascript:;" class="dis"
                         @click="doSelect(item)">{{ item.name }}</a>
                    </dd>
                  </dl>
                </li>
                <li v-for="(food,index) in configs.foods" :key="index" v-show="craftingIndex===2"
                    :class="[ food.showDetails ? 'current' : '' ]">
                  <h2 class="h2tit" @click="showFoodDetail(index)"><img :src="food.icon" alt=""><span>{{
                      food.name
                    }}</span></h2>
                  <dl :style="{ display: food.showDetails ? 'block' : 'none' }">
                    <dd v-for="(item,index) in food.list" :key="index">
                      <a href="javascript:;" class="dis"
                         @click="doSelect(item.id,item.name,item.pairs)">{{ item.name }}</a>
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

          <div class="none" v-if="!selected">Select equipment on the left to view crafting recipes</div>

          <div class="type1" v-if="!complate && selected">
            <div class="title">Ingredient Recipe</div>
            <div class="list">
              <ul>
               <li v-for="(item,index) in selected.pairs" :key="index">
                 <img src="@/assets/images/set1.png" alt="">
                 <div class="num">{{ item[1]}}</div>
               </li>
              </ul>
            </div>
            <div class="title2"><img src="@/assets/images/ic1.png" alt=""><span>{{selected.name}}</span></div>
            <div class="num">
              <i class="ic1" @click="decrCraftingNumber"></i>
              <input type="text" :value="craftingNumber" class="words">
              <i class="ic2" @click="incrCraftingNumber"></i>
            </div>
            <a href="javascript:;" class="Craft" @click="doCrafting">Craft</a>
          </div>

          <div class="type2" v-if="complate">
            <div class="title">Crafting Complete</div>
            <div class="list2">
              <ul>
                <li>
                  <div class="infor1">
                    <div class="icon"><img src="@/assets/images/ic1.png" alt=""></div>
                    <div class="tit">Feathered Crest</div>
                  </div>
                  <div class="dec">
                    <p>Healthy:+20</p>
                    <p>power:+20</p>
                    <p>Healthy:+20</p>
                    <p>power:+20</p>
                  </div>
                </li>
              </ul>
            </div>
            <a href="javascript:;" class="Craft" @click="onClickCompleteConform">confirm</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {ElMessage} from "element-plus";
import {composite_config, item_subtypes} from "@/config/item.js";
import {ITEM_SLOTS, ITEMS} from "@/system/GameData.js";

export default {
  name: 'CraftingComponent',
  components: {},
  mounted() {
    this.init();
  },
  computed: mapState(['wallet_address', "currRole", "craftingIndex", "craftingNumber"]),
  data() {
    return {
      selected: null,
      complate: null,
      configs: {
        equipments: {
          'Neck': {
            icon: "images/fd7.png",
            name: "Neck",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Ring': {
            icon: "images/fd8.png",
            name: "Ring",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Chest': {
            icon: "images/fd1.png",
            name: "Chest",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Hand': {
            icon: "images/ic1.png",
            name: "Hand",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Waist': {
            icon: "images/ic1.png",
            name: "Waist",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Foot': {
            icon: "images/ic1.png",
            name: "Foot",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Head': {
            icon: "images/ic1.png",
            name: "Head",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
          'Weapon': {
            icon: "images/ic1.png",
            name: "Weapon",
            showDetails: false,
            list: [],
            subtype: item_subtypes.head
          },
        },
        foods: [
          {
            icon: "images/ic6.png",
            name: "ROAST MEAT",
            showDetails: false,
            list: []
          },
          {
            icon: "images/ic6.png",
            name: "FISH SOUP",
            showDetails: false,
            list: []
          },
        ]
      }
    }
  },
  methods: {
    ...mapActions(['connect_wallet', 'addItem', "composite"
    ]),
    ...mapMutations([
      'setShowCrafting', "setCraftingIndex",
      "setCraftingNumber", "setEquipmentShowDetail", "setFoodShowDetail",
    ]),
    init() {
      for (let i = 0; i < composite_config.length; i++) {
        const comp = composite_config[i];
        const pairs = comp.composite.split(",").map(pair => {
          const [key, value] = pair.split("|");
          return {key: parseInt(key), value: parseInt(value)};
        });
        console.log(pairs);
        if (comp.type == 1) {
          let item_name = ITEMS[comp.id];
          let key = item_name.replace(' ', '');
          let item_slot = ITEM_SLOTS[key];
          switch (item_slot) {
            case 'Neck':
              this.configs.equipments.Neck.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Ring':
              this.configs.equipments.Ring.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Chest':
              this.configs.equipments.Chest.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Hand':
              this.configs.equipments.Hand.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Waist':
              this.configs.equipments.Waist.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Foot':
              this.configs.equipments.Foot.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Head':
              this.configs.equipments.Head.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;
            case 'Weapon':
              this.configs.equipments.Weapon.list.push({
                id: comp.id,
                name: item_name,
                pairs: pairs
              });
              break;

          }

          console.log(item_name, item_slot);
        }

        // switch (target_define.SUBCLASS) {
        //     case item_subtypes.hand:
        //
        //         break;
        // }

        // switch (target_define.TYPE) {
        //   case item_types.equipments:
        //     if (store.state.configs.equipments[target_define.SUBCLASS - 1]) {
        //       store.state.configs.equipments[target_define.SUBCLASS - 1].list.push({
        //         id: target_define.ID,
        //         name: target_define.NAME,
        //         pairs: pairs
        //       })
        //     }
        //     break;
        //   case item_types.foods:
        //     if (store.state.configs.foods[target_define.SUBCLASS - 9]) {
        //       store.state.configs.foods[target_define.SUBCLASS - 9].list.push({
        //         id: target_define.ID,
        //         name: target_define.NAME,
        //         pairs: pairs
        //       })
        //     }
        //     break;
        // }


      }

    },
    closeCrafting() {
      this.setShowCrafting(false);
    },
    incrCraftingNumber() {
      this.setCraftingNumber(this.craftingNumber + 1);
    },
    decrCraftingNumber() {
      this.setCraftingNumber(this.craftingNumber - 1);
    },
    async doCrafting() {
      // console.log(id, name, pairs)
      try {
        await this.composite({config_id: 1, times: this.craftingNumber});
        this.complate = true
      } catch (e) {
        console.log(e)
      }


      // ElMessage({
      //   message: 'Congrats, this is a success message',
      //   type: 'success',
      // })
    },
    showDetail(subid) {

      this.setEquipmentShowDetail(subid)
    },
    showFoodDetail(subid) {
      this.setFoodShowDetail(subid)
    },
    async doSelect(item) {
      console.log("select",item)
      // await this.addItem();
      // ElMessage({
      //   message: 'Congrats, this is a success message.',
      //   type: 'success',
      // })
      this.selected = item
    },
    onClickCompleteConform() {
      this.selected = null;
      this.complate = null;
    }
  }
}
</script>

<style scoped>

</style>