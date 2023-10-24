import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";
import {item_subtypes} from "../config/item.js";
import {getRandomNumber, stringToFelt} from "../utils/index.js";
import {parseEvents} from "../system/parseEvents.js";
import {getChecksumAddress} from 'starknet';


export const contract_address = "0x00d495aac3215853cebdf6f95a4b90fd790b760b112202df338c70ad641baf12";
// export const lordsContractAddress :string
export const store = createStore({
    state: {
        wallet_address: "",
        provider: null,
        account: null,
        showCrafting: false,
        showInformation: false,
        showMissionCompleted: false,
        craftingIndex: 1,
        craftingNumber: 1,
        currPage: 'world',
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
        adventurers: [],
        adventurer: null
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
        },
        setAdventures(state, value) {
            state.adventurers = value;
        },
        setAdventure(state, value) {
            state.adventurer = value;
        },
        setShowInformation(state, value) {
            state.showInformation = value
        },
        setShowMissionCompleted(state, value) {
            state.showMissionCompleted = value
        },
        setCurrPage(state, value) {
            state.currPage = value
        },
        doStart(state, payload) {

            const name = payload.name;
            const events = payload.events;

            const ad = {
                id: events[0].data.data.adventurerState.adventurerId,
                name: name,
                charisma: events[0].data.data.adventurerState.adventurer.stats.charisma,
                dexterity: events[0].data.data.adventurerState.adventurer.stats.dexterity,
                intelligence: events[0].data.data.adventurerState.adventurer.stats.intelligence,
                strength: events[0].data.data.adventurerState.adventurer.stats.strength,
                vitality: events[0].data.data.adventurerState.adventurer.stats.vitality,
                wisdom: events[0].data.data.adventurerState.adventurer.stats.wisdom,
                luck: 0

            };
            state.adventurer = ad;
            state.adventurers.push(ad)
        },
        doEvents(state, events) {
            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                switch (event.name) {
                    case "AdventurerDied":
                        break;

                }
            }
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
            let wallet_address = a.account.address;
            const provider = a.provider;
            const account = a.account;

            wallet_address = getChecksumAddress(wallet_address);


            context.commit("setWalletAddress", wallet_address);
            context.commit("setAccount", account);
            context.commit("setProvider", provider)
        },
        async getReceipt(context, txhash) {

            const receipt = await context.state.account?.waitForTransaction(txhash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doStart", {name: "", events: events})


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

            let receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doStart", {name: formData.name, events: events})

            // const adventurerState = events.find(
            //     (event) => event.name === "AmbushedByBeast"
            // ).data[0];

        },
        async explore(context, till_beast) {

            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "explore",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", till_beast ? "1" : "0"],
            };

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            let receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);

        },
        async attack(context, tillDeath, beastData) {

            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "attack",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", tillDeath ? "1" : "0"],
            }

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            let receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);
        },
        async flee(context, tillDeath, beastData) {

            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "flee",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", tillDeath ? "1" : "0"],
            }

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            let receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);
        },
        async upgrade(context,payload) {

            const currenUpgrades =payload.currenUpgrades;
            const items = payload.items;
            const potions = payload.potions;

            const potionAmount = potions;
            const upgrades = currenUpgrades;
            const purchaseItems = items;

            const upgradeTx = {
                contractAddress: contract_address,
                entrypoint: "upgrade_adventurer",
                calldata: [
                    context.state.adventurer?.id?.toString() ?? "",
                    "0",
                    potions ? potions.toString() :"0",
                    currenUpgrades
                        ? currenUpgrades["Strength"].toString()
                        : upgrades["Strength"].toString(),
                    currenUpgrades
                        ? currenUpgrades["Dexterity"].toString()
                        : upgrades["Dexterity"].toString(),
                    currenUpgrades
                        ? currenUpgrades["Vitality"].toString()
                        : upgrades["Vitality"].toString(),
                    currenUpgrades
                        ? currenUpgrades["Intelligence"].toString()
                        : upgrades["Intelligence"].toString(),
                    currenUpgrades
                        ? currenUpgrades["Wisdom"].toString()
                        : upgrades["Wisdom"].toString(),
                    currenUpgrades
                        ? currenUpgrades["Charisma"].toString()
                        : upgrades["Charisma"].toString(),
                    items ? items.length.toString() : purchaseItems.length.toString(),
                    ...(items
                        ? items.flatMap(Object.values)
                        : purchaseItems.flatMap(Object.values)),
                ],
            };


            const tx = await context.state.account?.execute(upgradeTx);

            console.log("tx", tx);

            let receipt = await context.state.account?.waitForTransaction(tx.transaction_hash, {
                retryInterval: 2000,
            });

            console.log('receipt', receipt);
        },
    }
})

