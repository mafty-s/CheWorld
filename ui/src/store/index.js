import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";
import {item_subtypes} from "../config/item.js";
import {getRandomNumber, stringToFelt} from "../utils/index.js";
import {parseEvents} from "../starknet/start.js";

export const contract_address = "0x01b7db5b5fda71d7eed79c14ecb8bedcf3c30e5bfbc3111e6eb622e64da1cfb7";
// export const lordsContractAddress :string
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
        },
        roles: [{}]
    },
    mutations: {
        setWalletAddress(state, value) {
            state.wallet_address = value;
        },
        setAccount(state, value) {
            state.account = value;
        },
        setProvider(state, value) {
            state.provider = value;
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
            context.commit("setAccount", account);
            context.commit("setProvider", provider)
        },
        async getReceipt(context,txhash){

            const receipt = await context.state.account?.waitForTransaction(txhash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);

            let events = parseEvents(receipt);

            console.log('events',events);
        },
        async start(context, formData) {


            // const mintLords = {
            //     contractAddress: lordsContractAddress,
            //     entrypoint: "mint",
            //     calldata: [formatAddress, (100 * 10 ** 18).toString(), "0"],
            // };
            //
            // const approveLordsTx = {
            //     contractAddress: lordsContract?.address ?? "",
            //     entrypoint: "approve",
            //     calldata: [contract_address, (100 * 10 ** 18).toString(), "0"],
            // };


            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "start",
                calldata: [
                    "0x0628d41075659afebfc27aa2aab36237b08ee0b112debd01e56d037f64f6082a",
                    formData.startingWeapon,
                    stringToFelt(formData.name).toString(),
                    getRandomNumber(8000),
                    formData.class,
                    "1",
                    formData.startingStrength,
                    formData.startingDexterity,
                    formData.startingVitality,
                    formData.startingIntelligence,
                    formData.startingWisdom,
                    formData.startingCharisma,
                ],
            };

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            const receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);

            // const events = await parseEvents(receipt);
            //
            // console.log('events', events);

            // const adventurerState = events.find(
            //     (event) => event.name === "AmbushedByBeast"
            // ).data[0];

        },
        async explore(context, till_beast) {
        },
        async attack(context, tillDeath, beastData) {
        },
        async flee(context, tillDeath, beastData) {
        },
        async upgrade(context) {
        },
    }
})

