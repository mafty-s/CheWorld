<script>
import {mapState} from "vuex";

export default {
  name: 'ShortcutBar',
  components: {},

  mounted() {

  },
  computed: mapState(['wallet_address', "adventurer",]),
  data() {
    return {}
  },
  methods: {
    getRenderData() {
      let temp = {
        icon: "@/assets/images/set1.png",
        num: 0,
        name: "wild berries",
        desc: "Wild berries are precious forest resources, providing both nourishment and healing.",
        type: "wild berries",
      };

      let res = [];
      let resources = this.adventurer.resources;
      console.log("resources", resources);
      Object.keys(resources).map((key) => {
        const num = resources[key];
        let item = JSON.parse(JSON.stringify(temp));
        if (num > 0  && key!=="last_timestamp") {
          item.name = key;
          item.num = num;
          res.push(item);
        }
      });

      let empty = [];
      for (let i = res.length; i < 11; i++) {
        empty.push(i)
      }

      return {
        res: res,
        empty: empty
      };
    }
  }
}
</script>

<template>
  <div class="controls">
    <ul>
      <li v-for="item in getRenderData().res " :key="item">
        <img src="@/assets/images/set1.png" alt="">
        <div class="num">{{ item.num }}</div>
        <div class="slide">
          <div class="if1">
            <div class="icn"><img src="@/assets/images/set1.png" alt=""></div>
            <div class="ri">
              <p>
                <b>Item: </b>{{ item.name }}
              </p>
              <p>
                <b>Type:</b>{{ item.type }}
              </p>
              <p>
                <b>Quantity: </b>{{ item.num }}
              </p>
            </div>
          </div>
          <div class="if2">
            {{ item.desc }}
          </div>
        </div>
      </li>
      <li v-for="i in getRenderData().empty " :key="i"></li>
    </ul>
  </div>
</template>

<style scoped>

</style>