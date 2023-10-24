import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";
import {item_subtypes} from "../config/item.js";
import {formatAdventurerState, getRandomNumber, stringToFelt} from "../utils/index.js";
import {parseEvents} from "../system/parseEvents.js";
import {Contract, getChecksumAddress, hash, uint256} from 'starknet';


export const contract_address = "0x0524d66e57fee8ce3ac9e41c8b62eff50cfa78abb89844bdff17c9cedd4aa56b";
import contract_abi from "./abi.json";
import {ElMessage} from "element-plus";
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
        currPage: 'login',
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
        setAdventurerName(state, value) {
            state.adventurer.name = value;
        },
        doEvents(state, events) {
            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                switch (event.name) {
                    case "StartGame":
                        const id = event.data.data.adventurerState.adventurerId;
                        const id_num = uint256.uint256ToBN(id)
                        const ad = {
                            id: id_num,
                            name: "loading",
                            charisma: event.data.data.adventurerState.adventurer.stats.charisma,
                            dexterity: event.data.data.adventurerState.adventurer.stats.dexterity,
                            intelligence: event.data.data.adventurerState.adventurer.stats.intelligence,
                            strength: event.data.data.adventurerState.adventurer.stats.strength,
                            vitality: event.data.data.adventurerState.adventurer.stats.vitality,
                            wisdom: event.data.data.adventurerState.adventurer.stats.wisdom,
                            luck: 0,
                            xp: 0,
                            gold: 0,
                            health: 100,
                            statUpgrades: 0,
                            battles: [
                                {
                                    "adventurerHealth": 100,  // 冒险者生命值
                                    "adventurerId": 5,  // 冒险者ID
                                    "attacker": "Beast",  // 攻击者
                                    "beast": "Fairy",  // 兽类
                                    "beastHealth": 5,  // 兽类生命值
                                    "beastLevel": 1,  // 兽类等级
                                    "blockTime": "2023-09-22T14:57:31.870Z",  // 区块时间
                                    "criticalHit": false,  // 是否暴击
                                    "damageDealt": 0,  // 造成伤害
                                    "damageLocation": "Foot",  // 伤害位置
                                    "damageTaken": 10,  // 承受伤害
                                    "discoveryTime": "2023-09-22T14:57:31.870Z",  // 发现时间
                                    "fled": false,  // 是否逃跑
                                    "goldEarned": 0,  // 获得金币
                                    "seed": "0x0000000000000000000000000000000000000000000000000000000000000000",  // 种子
                                    "special1": null,  // 特殊属性1
                                    "special2": null,  // 特殊属性2
                                    "special3": null,  // 特殊属性3
                                    "timestamp": "2023-09-22T14:57:31.870Z",  // 时间戳
                                    "txHash": "0x02063f1a064203b50ecd3e25f092aa5423c31ab49401dd5193364faab6aded25",  // 交易哈希
                                    "xpEarnedAdventurer": 0,  // 冒险者获得经验值
                                    "xpEarnedItems": 0  // 物品获得经验值
                                }
                            ]
                        };
                        state.adventurer = ad;
                        state.adventurers.push(ad)
                        break;
                    case "AdventurerUpgraded":
                        ElMessage('AdventurerUpgraded')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        break;
                    case "DiscoveredHealth":
                        ElMessage('DiscoveredHealth')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        break;
                    case "DiscoveredGold":
                        ElMessage('DiscoveredGold')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        break;
                    case "DiscoveredXP":
                        ElMessage('DiscoveredXP')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        break;
                    case "DodgedObstacle":
                        ElMessage('DodgedObstacle')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        break;
                    case "HitByObstacle":
                        ElMessage('HitByObstacle')
                        break;
                    case "DiscoveredBeast":
                        ElMessage('DiscoveredBeast')
                        break;
                    case "AmbushedByBeast":
                        ElMessage('AmbushedByBeast')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        state.adventurer.beastSpecs = event.data.data.beastSpecs;
                        break;
                    case "AttackedBeast":
                        ElMessage('AttackedBeast')
                        break;
                    case "AttackedByBeast":
                        ElMessage('AttackedByBeast')
                        break;
                    case "SlayedBeast":
                        ElMessage('SlayedBeast')
                        state.adventurer.beastSpecs = null;
                        break;
                    case "FleeFailed":
                        ElMessage('FleeFailed')
                        break;
                    case "FleeSucceeded":
                        ElMessage('FleeSucceeded')
                        break;
                    case "PurchasedItems":
                        ElMessage('PurchasedItems')
                        break;
                    case "PurchasedPotions":
                        ElMessage('PurchasedPotions')
                        break
                    case "EquippedItems":
                        ElMessage('EquippedItems')
                        break;
                    case "DroppedItems":
                        ElMessage('DroppedItems')
                        break;
                    case "GreatnessIncreased":
                        ElMessage('GreatnessIncreased')
                        break;
                    case "ItemsLeveledUp":
                        ElMessage('ItemsLeveledUp')
                        break;
                    case "NewHighScore":
                        ElMessage('NewHighScore')
                        break;
                    case "AdventurerDied":
                        ElMessage('AdventurerDied')
                        break;
                    case "AdventurerLeveledUp":
                        ElMessage('AdventurerLeveledUp')

                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        state.showInformation = true;
                        break;
                    case "NewItemsAvailable":
                        ElMessage('NewItemsAvailable')
                        break;
                    case "IdleDeathPenalty":
                        ElMessage('IdleDeathPenalty')
                        break;
                    case "RewardDistribution":
                        ElMessage('RewardDistribution')
                        break;
                    case "ResUpdate":
                        state.adventurer.resources = event.data.data.adventurer_res;
                        break;
                    default:
                        ElMessage('unknown event: ' + event.name)
                        break;
                }
            }
        }
    },
    actions: {
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
        async poolReceipt(context, txhash) {

            ElMessage({
                message: '' + txhash,
                type: 'success',
            })

            let receipt = null;
            let retryCount = 0;
            const maxRetryCount = 10; // 最大重试次数

            while (retryCount < maxRetryCount) {
                try {
                    console.log("trying to execute the transaction:", txhash, retryCount);
                    receipt = await context.state.account?.waitForTransaction(txhash, {
                        retryInterval: 3000,
                    });
                    return receipt; // 返回收据
                } catch (error) {
                    console.error('Error occurred while executing the transaction:', error);
                    retryCount++;
                }
            }

            return null; // 达到最大重试次数时返回null
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

            if (formData.name === "") {
                return;
            }

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
            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);
            console.log('receipt', receipt);
            let events = await parseEvents(receipt);
            console.log('events', events);
            context.commit("doEvents", events)
            context.commit("setAdventurerName", formData.name);
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

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)

        },
        async attack(context, tillDeath, beastData) {

            console.log("attack", tillDeath, context.state.adventurer?.id?.toString());

            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "attack",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", tillDeath ? "1" : "0"],
            }

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);

            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)
        },
        async flee(context, tillDeath, beastData) {

            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "flee",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", tillDeath ? "1" : "0"],
            }

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);


            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)
        },
        async upgrade(context, payload) {

            const currenUpgrades = payload.currenUpgrades;
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
                    potions ? potions.toString() : "0",
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

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);

            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)

        },
        async harvesting(context) {
            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "harvesting",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0"],
            };

            const tx = await context.state.account?.execute(mintAdventurerTx);

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);

            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)

        },
        async loadResources(context) {
            const contract = new Contract(contract_abi, contract_address, context.state.account);
            const resouces = await contract.get_adventurer_res(1);
            console.log("resouces", resouces);
            // context.state.adventurer?.resource = resouces;
        }
    }
})

