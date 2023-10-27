import {createStore} from "vuex";
import {connect} from "@argent/get-starknet";
import {formatAdventurerState, getCurrentTime, getRandomNumber, stringToFelt} from "../utils/index.js";
import {parseEvents} from "../system/parseEvents.js";
import {Contract, getChecksumAddress, hash, TransactionStatus, uint256} from 'starknet';


export const contract_address = "0x00b7af63a52cc2d5c2b15d21a48366a003b51c2863683306edadd42387b90861";
import contract_abi from "./abi.json";
import {ElMessage} from "element-plus";
import {BEASTS} from "../system/GameData.js";
// export const lordsContractAddress :string
export const store = createStore({
    state: {
        wallet_address: "",
        provider: null,
        account: null,
        showCrafting: false,
        showInformation: false,
        showMissionCompleted: false,
        showDeadModal: false,
        showLogModal: false,
        showBeastInfoModal: false,
        showBattleMask: false,
        showBattleVictory: false,
        craftingIndex: 1,
        craftingNumber: 1,
        currPage: 'login',
        currRole: {
            ingredientRecipe: [],
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
        setShowLogModal(state, value) {
            state.showLogModal = value
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
        setShowBeastInfoModal(state, value) {
            state.showBeastInfoModal = value
        },
        setShowBattleMask(state, value) {
            state.showBattleMask = value
        },
        setShowBattleVictory(state, value) {
            state.showBattleVictory = value
        },
        setCurrPage(state, value) {
            state.currPage = value
        },
        setAdventurerName(state, value) {
            state.adventurer.name = value;
        },
        addLog(state, log) {
            state.adventurer.logs.push('addLog', log);
            state.showLogModal = true;
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
                            bag: {
                                item1: {id: 0, xp: 0, metadata: 0},
                                item2: {id: 0, xp: 0, metadata: 0},
                                item3: {id: 0, xp: 0, metadata: 0},
                                item4: {id: 0, xp: 0, metadata: 0},
                                item5: {id: 0, xp: 0, metadata: 0},
                                item6: {id: 0, xp: 0, metadata: 0},
                                item7: {id: 0, xp: 0, metadata: 0},
                                item8: {id: 0, xp: 0, metadata: 0},
                                item9: {id: 0, xp: 0, metadata: 0},
                                item10: {id: 0, xp: 0, metadata: 0},
                                item11: {id: 0, xp: 0, metadata: 0}
                            },
                            logs: []
                        };
                        state.adventurer = ad;
                        state.adventurers.push(ad)
                        break;
                    case "AdventurerUpgraded":
                        ElMessage('AdventurerUpgraded')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);

                        state.showInformation = false;
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "GREAT! Adventurer Upgraded!",
                            tx_hash: event.data.transaction_hash
                        })

                        break;
                    case "DiscoveredHealth":
                        ElMessage('DiscoveredHealth')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);

                        const healthAmount = event.data.data.healthAmount;


                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "GREAT! Discovered " + healthAmount + " health!",
                            tx_hash: event.data.transaction_hash

                        })

                        break;
                    case "DiscoveredGold":
                        ElMessage('DiscoveredGold')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);

                        const gold = event.data.data.goldAmount;
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "GREAT! Discovered " + gold + " gold!",
                            tx_hash: event.data.transaction_hash
                        })

                        break;
                    case "DiscoveredXP":
                        ElMessage('DiscoveredXP')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);

                        const xp = event.data.data.xpAmount;

                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "GREAT! Discovered " + xp + " xp!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "DodgedObstacle":
                        ElMessage('DodgedObstacle')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Dodged Obstacle!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "HitByObstacle":
                        ElMessage('HitByObstacle')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "OH NO! Hit By Obstacle!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "DiscoveredBeast":
                        ElMessage('DiscoveredBeast')
                        state.adventurer.beastSpecs = event.data.data.beastSpecs;
                        let findBeatsId = event.data.data.id;
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "OH NO! Discovered a " + BEASTS[findBeatsId] + "!",
                            tx_hash: event.data.transaction_hash
                        })
                        this.commit('setShowBeastInfoModal', true)
                        break;
                    case "AmbushedByBeast":
                        ElMessage('AmbushedByBeast')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        state.adventurer.beastSpecs = event.data.data.beastSpecs;
                        const beatsId = event.data.data.id;
                        const beastName = BEASTS[beatsId];
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "YIKES! Ambushed by a " + beastName + "!",
                            tx_hash: event.data.transaction_hash
                        })
                        this.commit('setBeastInfoModal', true);
                        break;
                    case "AttackedBeast":
                        ElMessage('AttackedBeast')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Attacked Beast!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "AttackedByBeast":
                        ElMessage('AttackedByBeast')
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Attacked By Beast!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "SlayedBeast":
                        ElMessage('SlayedBeast')
                        state.adventurer.beastSpecs = null;
                        // this.commit('addLog',{
                        //     txid:event.data.data.transaction_hash,
                        //     time:event.data.data.t
                        // })
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Slayed Beast!",
                            tx_hash: event.data.transaction_hash
                        })
                        this.commit('setShowBattleVictory', true)
                        break;
                    case "FleeFailed":
                        ElMessage('FleeFailed')
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Flee Failed!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "FleeSucceeded":
                        ElMessage('FleeSucceeded')
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Flee Succeeded!",
                            tx_hash: event.data.transaction_hash
                        })
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
                        state.showDeadModal = true;
                        break;
                    case "AdventurerLeveledUp":
                        ElMessage('AdventurerLeveledUp')

                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerState);
                        state.showInformation = true;

                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Adventurer Level Up!",
                            tx_hash: event.data.transaction_hash
                        });
                        break;
                    case "NewItemsAvailable":
                        ElMessage('NewItemsAvailable')
                        break;
                    case "IdleDeathPenalty":
                        ElMessage('IdleDeathPenalty')
                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "OOPS! Killed by idle death penalty!",
                            tx_hash: event.data.transaction_hash
                        })
                        break;
                    case "RewardDistribution":
                        ElMessage('RewardDistribution')
                        break;
                    case "ResUpdate":
                        state.adventurer.resources = event.data.data.adventurer_res;

                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Hunt successfully to obtain food!",
                            tx_hash: event.data.transaction_hash
                        })

                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Successfully obtain wood from logging!",
                            tx_hash: event.data.transaction_hash
                        })

                        this.commit('addLog', {
                            time: getCurrentTime(),
                            context: "Mining successfully obtained ore!",
                            tx_hash: event.data.transaction_hash
                        })

                        break;
                    case "Composited":
                        state.adventurer = formatAdventurerState(state.adventurer, event.data.data.adventurerStateWithBag.adventurerState);
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
                        successStates: [TransactionStatus.ACCEPTED_ON_L2],
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

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);

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

            context.commit('setShowBeastInfoModal', false);
            context.commit('setShowBattleMask', true);
            console.log("tx", tx);

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);

            console.log('receipt', receipt);

            context.commit('setShowBattleMask', false);

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
        async equip(context, items) {

        },
        async drop_items(context, items) {

        },
        async composite(context, payload) {
            let config_id = payload.config_id;
            let times = payload.times;
            console.log("composite", context.state.adventurer?.id?.toString(), "id=" + config_id, "times=" + times.toString());
            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "composite",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "0", config_id.toString(), times.toString()],
            }

            const tx = await context.state.account?.execute(mintAdventurerTx);

            console.log("tx", tx);

            const receipt = await context.dispatch('poolReceipt', tx.transaction_hash);


            console.log('receipt', receipt);

            let events = await parseEvents(receipt);

            console.log('events', events);

            context.commit("doEvents", events)
            return events;
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
        async addItem(context) {
            const mintAdventurerTx = {
                contractAddress: contract_address,
                entrypoint: "addItem",
                calldata: [context.state.adventurer?.id?.toString() ?? "", "1"],
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

