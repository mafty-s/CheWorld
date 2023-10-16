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


import {items_config} from "./config/item.js";
import {composite_config} from "./config/item.js";

for (let i = 0; i <= composite_config.length; i++) {
    const comp = composite_config[i];
    const pairs = comp.COMPOSITE.split(",").map(pair => {
        const [key, value] = pair.split("|");
        return {key: parseInt(key), value: parseInt(value)};
    });
    console.log(pairs);
    const target_define = items_config[comp.ID];


}

app.mount('#app')
