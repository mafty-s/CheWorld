import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {store} from "./store"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)


import {items_config, composite_config, item_subtypes, getItemConfigById, item_types} from "./config/item.js";

for (let i = 0; i < composite_config.length; i++) {
    const comp = composite_config[i];
    const pairs = comp.COMPOSITE.split(",").map(pair => {
        const [key, value] = pair.split("|");
        return {key: parseInt(key), value: parseInt(value)};
    });
    console.log(pairs);
    const target_define = getItemConfigById(comp.ID);
    if (!target_define) {
        console.log("comp.ID", comp.ID)
        continue;
    }

    // switch (target_define.SUBCLASS) {
    //     case item_subtypes.hand:
    //
    //         break;
    // }

    switch (target_define.TYPE) {
        case item_types.equipments:
            if (store.state.currRole.bag.equipments[target_define.SUBCLASS]) {
                store.state.currRole.bag.equipments[target_define.SUBCLASS].list.push({
                    id: target_define.ID,
                    name: target_define.NAME
                })
            }
            break;
    }


}

app.mount('#app')
