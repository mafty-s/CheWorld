import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";

export const store = createStore({
    state: {
        wallet_address: "",
        provider: null,
        account: null,
        showCrafting: false,
        craftingIndex: 1,
        craftingNumber:1,
        currRole: {
            ingredientRecipe:[

            ],
            bag: {
                equipments: [
                    {
                        icon: "images/ic1.png",
                        name: "HEAD",
                        list: []
                    },
                    {
                        icon: "images/ic2.png",
                        name: "CHEST",
                        list: []
                    },
                    {
                        icon: "images/ic3.png",
                        name: "WAIST",
                        list: []
                    },
                    {
                        icon: "images/ic4.png",
                        name: "FOOT",
                        list: []
                    },
                    {
                        icon: "images/ic5.png",
                        name: "WEAPON",
                        list: []
                    },
                    {
                        icon: "images/ic6.png",
                        name: "HAND",
                        list: []
                    },
                    {
                        icon: "images/ic6.png",
                        name: "NECK",
                        list: []
                    },
                    {
                        icon: "images/ic6.png",
                        name: "RING",
                        list: []
                    },
                ],
                foods: [
                    {
                        icon: "images/ic6.png",
                        name: "ROAST MEAT",
                        list: []
                    },
                    {
                        icon: "images/ic6.png",
                        name: "FISH SOUP",
                        list: []
                    },
                ]
            }
        }
    },
    mutations: {
        setWalletAddress(state, value) {
            state.wallet_address = value;
        },
        setShowCrafting(state, value) {
            state.showCrafting = value
        },
        setCraftingIndex(state, value) {
            state.craftingIndex = value
        },
        setCraftingNumber(state,value){
            if(value<1){
                value=1;
            }
            if(value>99){
                value=99;
            }
            state.craftingNumber=value;
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

