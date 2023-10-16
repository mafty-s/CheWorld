import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";

export const store = createStore({
    state: {
        wallet_address: "",
        provider: null,
        account: null,
        showCrafting: false
    },
    mutations: {
        setWalletAddress(state, value) {
            state.wallet_address = value;
        },
        setShowCrafting(state, value) {
            state.showCrafting = value
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        async connect_wallet(context) {
            const a = await connect({
                modalMode: "alwaysAsk",
                modalTheme: "dark",
                chainId: "SN_GOERLI"
            });
            const wallet_address = a.account.address;
            const provider = a.provider;
            const account = a.account;
            context.commit("setWalletAddress", wallet_address);
        }
    }
})

