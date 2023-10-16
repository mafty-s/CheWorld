import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";
import {item_subtypes} from "../config/item.js";

export const store = createStore({
    state: {
        wallet_address: "",
        provider: null,
        account: null,
        showCrafting: false,
        craftingIndex: 1,
        craftingNumber: 1,
        currRole: {
            ingredientRecipe: [],
            bag: {
                equipments: [
                    item_subtypes.hand = {
                        icon: "images/ic1.png",
                        name: "HEAD",
                        list: [],
                        subtype:item_subtypes.head
                    },
                    item_subtypes.chest =   {
                        icon: "images/ic2.png",
                        name: "CHEST",
                        list: [],
                        subtype:item_subtypes.chest
                    },
                    item_subtypes.waist =  {
                        icon: "images/ic3.png",
                        name: "WAIST",
                        list: [],
                        subtype:item_subtypes.waist
                    },
                    {
                        icon: "images/ic4.png",
                        name: "FOOT",
                        list: [],
                        subtype:item_subtypes.foot
                    },
                    {
                        icon: "images/ic5.png",
                        name: "WEAPON",
                        list: [],
                        subtype:item_subtypes.weapon
                    },
                    {
                        icon: "images/ic6.png",
                        name: "HAND",
                        list: [],
                        subtype:item_subtypes.hand
                    },
                    {
                        icon: "images/ic6.png",
                        name: "NECK",
                        list: [],
                        subtype:item_subtypes.nick
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
        setCraftingNumber(state, value) {
            if (value < 1) {
                value = 1;
            }
            if (value > 99) {
                value = 99;
            }
            state.craftingNumber = value;
        },
        addItem(state,value){

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

