import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";

export const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        async connect_wallet(){
            const a = await connect({
                modalMode:"alwaysAsk",
                modalTheme:"dark",
                chainId:"SN_GOERLI"
            });
        }
    }
})

