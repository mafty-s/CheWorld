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
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.head
                    },
                    item_subtypes.chest = {
                        icon: "images/ic2.png",
                        name: "CHEST",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.chest
                    },
                    item_subtypes.waist = {
                        icon: "images/ic3.png",
                        name: "WAIST",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.waist
                    },
                    {
                        icon: "images/ic4.png",
                        name: "FOOT",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.foot
                    },
                    {
                        icon: "images/ic5.png",
                        name: "WEAPON",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.weapon
                    },
                    {
                        icon: "images/ic6.png",
                        name: "HAND",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.hand
                    },
                    {
                        icon: "images/ic6.png",
                        name: "NECK",
                        showDetails: false,
                        list: [],
                        subtype: item_subtypes.nick
                    },
                    {
                        icon: "images/ic6.png",
                        name: "RING",
                        showDetails: false,
                        list: []
                    },
                ],
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
        addItem(state, value) {

        },
        setEquipmentShowDetail(state, index) {
            state.currRole.bag.equipments[index].showDetails = !state.currRole.bag.equipments[index].showDetails
        },
        setFoodShowDetail(state, index) {
            state.currRole.bag.foods[index].showDetails = !state.currRole.bag.foods[index].showDetails
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

