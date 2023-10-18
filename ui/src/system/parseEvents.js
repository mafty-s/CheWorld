import {convertToBoolean, getKeyFromValue} from "../utils/index.js";
import {SELECTOR_KEYS} from "./GameData.js";

function parseAdventurerState(data) {
    return {
        owner: data[0],
        adventurerId: {
            low: parseInt(data[1]),
            high: parseInt(data[2]),
        },
        adventurer: {
            lastAction: parseInt(data[3]),
            health: parseInt(data[4]),
            xp: parseInt(data[5]),
            stats: {
                strength: parseInt(data[6]),
                dexterity: parseInt(data[7]),
                vitality: parseInt(data[8]),
                intelligence: parseInt(data[9]),
                wisdom: parseInt(data[10]),
                charisma: parseInt(data[11]),
            },
            gold: parseInt(data[12]),
            weapon: {
                id: parseInt(data[13]),
                xp: parseInt(data[14]),
                metadata: parseInt(data[15]),
            },
            chest: {
                id: parseInt(data[16]),
                xp: parseInt(data[17]),
                metadata: parseInt(data[18]),
            },
            head: {
                id: parseInt(data[19]),
                xp: parseInt(data[20]),
                metadata: parseInt(data[21]),
            },
            waist: {
                id: parseInt(data[22]),
                xp: parseInt(data[23]),
                metadata: parseInt(data[24]),
            },
            foot: {
                id: parseInt(data[25]),
                xp: parseInt(data[26]),
                metadata: parseInt(data[27]),
            },
            hand: {
                id: parseInt(data[28]),
                xp: parseInt(data[29]),
                metadata: parseInt(data[30]),
            },
            neck: {
                id: parseInt(data[31]),
                xp: parseInt(data[32]),
                metadata: parseInt(data[33]),
            },
            ring: {
                id: parseInt(data[34]),
                xp: parseInt(data[35]),
                metadata: parseInt(data[36]),
            },
            beastHealth: parseInt(data[37]),
            statPointsAvailable: parseInt(data[38]),
            mutated: convertToBoolean(parseInt(data[39])),
        },
    };
}

export async function parseEvents(receipt) {
    if (!receipt.events) {
        throw new Error(`No events found`);
    }
    let events = [];
    for (let raw of receipt.events) {

        const eventName = getKeyFromValue(SELECTOR_KEYS, raw.keys[0]);

        switch (eventName) {
            case "StartGame":
                const startGameData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    adventurerMeta: {
                        name: parseInt(raw.data[40]),
                        homeRealm: parseInt(raw.data[41]),
                        class: parseInt(raw.data[42]),
                        entropy: parseInt(raw.data[43]),
                    },
                };
                console.log("startGameData", startGameData);
                events.push({
                    name: eventName, data: {
                        data: startGameData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "AdventurerUpgraded":
                console.log("AdventurerUpgraded", raw.data);
                const upgradeAvailableData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                };
                events.push({
                    name: eventName, data: {
                        data: upgradeAvailableData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DiscoveredHealth":
                console.log("DiscoveredHealth", raw.data);
                const discoveredHealthData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    healthAmount: parseInt(raw.data[40]),
                };
                events.push({
                    name: eventName, data: {
                        data: discoveredHealthData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DiscoveredGold":
                console.log("DiscoveredGold", raw.data);
                const discoveredGoldData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    goldAmount: parseInt(raw.data[40]),
                };
                events.push({
                    name: eventName, data: {
                        data: discoveredGoldData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DiscoveredXP":
                console.log("DiscoveredXP", raw.data);
                const discoveredXPData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    xpAmount: parseInt(raw.data[40]),
                };
                events.push({
                    name: eventName, data: {
                        data: discoveredXPData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DodgedObstacle":
                console.log("DodgedObstacle", raw.data);
                const dodgedObstacleData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    id: parseInt(raw.data[40]),
                    level: parseInt(raw.data[41]),
                    damageTaken: parseInt(raw.data[42]),
                    damageLocation: parseInt(raw.data[43]),
                    xpEarnedAdventurer: parseInt(raw.data[44]),
                    xpEarnedItems: parseInt(raw.data[45]),
                };
                events.push({
                    name: eventName, data: {
                        data: dodgedObstacleData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "HitByObstacle":
                console.log("HitByObstacle", raw.data);
                const hitByObstacleData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    id: parseInt(raw.data[40]),
                    level: parseInt(raw.data[41]),
                    damageTaken: parseInt(raw.data[42]),
                    damageLocation: parseInt(raw.data[43]),
                    xpEarnedAdventurer: parseInt(raw.data[44]),
                    xpEarnedItems: parseInt(raw.data[45]),
                };
                events.push({
                    name: eventName, data: {
                        data: hitByObstacleData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DiscoveredBeast":
                console.log("DiscoveredBeast", raw.data);
                const discoveredBeastData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    seed: parseInt(raw.data[40]),
                    id: parseInt(raw.data[41]),
                    beastSpecs: {
                        tier: parseInt(raw.data[42]),
                        itemType: parseInt(raw.data[43]),
                        level: parseInt(raw.data[44]),
                        specials: {
                            special1: parseInt(raw.data[45]),
                            special2: parseInt(raw.data[46]),
                            special3: parseInt(raw.data[47]),
                        },
                    },
                };
                events.push({
                    name: eventName, data: {
                        data: discoveredBeastData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "AmbushedByBeast":
                console.log("AmbushedByBeast", raw.data);
                const ambushedByBeastData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    seed: parseInt(raw.data[40]),
                    id: parseInt(raw.data[41]),
                    beastSpecs: {
                        tier: parseInt(raw.data[42]),
                        itemType: parseInt(raw.data[43]),
                        level: parseInt(raw.data[44]),
                        specials: {
                            special1: parseInt(raw.data[45]),
                            special2: parseInt(raw.data[46]),
                            special3: parseInt(raw.data[47]),
                        },
                    },
                    damage: parseInt(raw.data[48]),
                    criticalHit: convertToBoolean(parseInt(raw.data[49])),
                    location: parseInt(raw.data[50]),
                };
                events.push({
                    name: eventName, data: {
                        data: ambushedByBeastData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "AttackedBeast":
                console.log("AttackedBeast", raw.data);
                break;
            case "AttackedByBeast":
                console.log("AttackedByBeast", raw.data);
                break;
            case "SlayedBeast"://杀掉了怪
                console.log("SlayedBeast", raw.data);
                const slayedBeastData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    seed: parseInt(raw.data[40]),
                    id: parseInt(raw.data[41]),
                    beastSpecs: {
                        tier: parseInt(raw.data[42]),
                        itemType: parseInt(raw.data[43]),
                        level: parseInt(raw.data[44]),
                        specials: {
                            special1: parseInt(raw.data[45]),
                            special2: parseInt(raw.data[46]),
                            special3: parseInt(raw.data[47]),
                        },
                    },
                    damageDealt: parseInt(raw.data[48]),
                    criticalHit: convertToBoolean(parseInt(raw.data[49])),
                    xpEarnedAdventurer: parseInt(raw.data[50]),
                    xpEarnedItems: parseInt(raw.data[51]),
                    goldEarned: parseInt(raw.data[52]),
                };
                events.push({
                    name: eventName, data: {
                        data: slayedBeastData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "FleeFailed":
                console.log("FleeFailed", raw.data);
                break;
            case "FleeSucceeded":
                console.log("FleeSucceeded", raw.data);
                break;
            case "PurchasedItems":
                console.log("PurchasedItems", raw.data);
                break;
            case "PurchasedPotions":
                console.log("PurchasedPotions", raw.data);
                break;
            case "EquippedItems":
                console.log("EquippedItems", raw.data);
                break;
            case "DroppedItems":
                console.log("DroppedItems", raw.data);
                break;
            case "GreatnessIncreased":
                console.log("GreatnessIncreased", raw.data);
                break;
            case "ItemsLeveledUp":
                console.log("ItemsLeveledUp", raw.data);
                break;
            case "NewHighScore":
                console.log("NewHighScore", raw.data);
                break;
            case "AdventurerDied":
                console.log("AdventurerDied", raw.data);
                const adventurerDiedData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    killedByBeast: parseInt(raw.data[40]),
                    killedByObstacle: parseInt(raw.data[41]),
                    callerAddress: raw.data[42],
                };
                events.push({
                    name: eventName, data: {
                        data: adventurerDiedData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "AdventurerLeveledUp":
                console.log("AdventurerLeveledUp", raw.data);
                const adventurerLeveledUpData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    previousLevel: parseInt(raw.data[40]),
                    newLevel: parseInt(raw.data[41]),
                };
                events.push({
                    name: eventName, data: {
                        data: adventurerLeveledUpData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "NewItemsAvailable":
                console.log("NewItemsAvailable", raw.data);
                break;
            case "IdleDeathPenalty":
                console.log("IdleDeathPenalty", raw.data);
                const idleDeathPenaltyData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    idleBlocks: parseInt(raw.data[40]),
                    penaltyThreshold: parseInt(raw.data[41]),
                    caller: raw.data[42],
                };
                events.push({
                    name: eventName, data: {
                        data: idleDeathPenaltyData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;

        }

    }

    return events;
}
