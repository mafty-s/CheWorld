import {chunkArray, convertToBoolean, getKeyFromValue} from "../utils/index.js";
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

function parseBag(data) {
    return {
        item1: {
            id: parseInt(data[0]),
            xp: parseInt(data[1]),
            metadata: parseInt(data[2]),
        },
        item2: {
            id: parseInt(data[3]),
            xp: parseInt(data[4]),
            metadata: parseInt(data[5]),
        },
        item3: {
            id: parseInt(data[6]),
            xp: parseInt(data[7]),
            metadata: parseInt(data[8]),
        },
        item4: {
            id: parseInt(data[9]),
            xp: parseInt(data[10]),
            metadata: parseInt(data[11]),
        },
        item5: {
            id: parseInt(data[12]),
            xp: parseInt(data[13]),
            metadata: parseInt(data[14]),
        },
        item6: {
            id: parseInt(data[15]),
            xp: parseInt(data[16]),
            metadata: parseInt(data[17]),
        },
        item7: {
            id: parseInt(data[18]),
            xp: parseInt(data[19]),
            metadata: parseInt(data[20]),
        },
        item8: {
            id: parseInt(data[21]),
            xp: parseInt(data[22]),
            metadata: parseInt(data[23]),
        },
        item9: {
            id: parseInt(data[24]),
            xp: parseInt(data[25]),
            metadata: parseInt(data[26]),
        },
        item10: {
            id: parseInt(data[27]),
            xp: parseInt(data[28]),
            metadata: parseInt(data[29]),
        },
        item11: {
            id: parseInt(data[30]),
            xp: parseInt(data[31]),
            metadata: parseInt(data[32]),
        },
        mutated: convertToBoolean(parseInt(data[33])),
    };
}

function parseItems(data) {
    const purchases = [];
    const chunkedArray = chunkArray(data, 5);
    for (let i = 0; i < chunkedArray.length; i++) {
        purchases.push({
            item: {
                id: parseInt(chunkedArray[i][0]),
                tier: parseInt(chunkedArray[i][1]),
                itemType: parseInt(chunkedArray[i][2]),
                slot: parseInt(chunkedArray[i][3]),
            },
            price: parseInt(chunkedArray[i][4]),
        });
    }
    return purchases;
}

function parseEquippedItems(data) {
    const equippedLength = parseInt(data[0]);
    const equippedItems = [];
    const unequippedItems = [];
    for (let i = 1; i <= equippedLength; i++) {
        equippedItems.push(parseInt(data[i]));
    }
    const unequippedLength = parseInt(data[equippedLength + 1]);
    for (let i = 2; i <= unequippedLength + 1; i++) {
        unequippedItems.push(parseInt(data[i + equippedLength]));
    }
    return { equippedItems, unequippedItems };
}

function parseItemLevels(data) {
    const itemLevels = [];
    const chunkedArray = chunkArray(data, 8);
    for (let i = 0; i < chunkedArray.length; i++) {
        itemLevels.push({
            itemId: parseInt(chunkedArray[i][0]),
            previousLevel: parseInt(chunkedArray[i][1]),
            newLevel: parseInt(chunkedArray[i][2]),
            suffixUnlocked: convertToBoolean(parseInt(chunkedArray[i][3])),
            prefixesUnlocked: convertToBoolean(parseInt(chunkedArray[i][4])),
            specials: {
                special1: parseInt(chunkedArray[i][5]),
                special2: parseInt(chunkedArray[i][6]),
                special3: parseInt(chunkedArray[i][7]),
            },
        });
    }
    return itemLevels;
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
                const attackedBeastData = {
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
                        data: attackedBeastData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "AttackedByBeast":
                console.log("AttackedByBeast", raw.data);
                const attackedByBeastData = {
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
                        data: attackedByBeastData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
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
                const fleeFailedData = {
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
                        data: fleeFailedData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "FleeSucceeded":
                console.log("FleeSucceeded", raw.data);
                const fleeSucceededData = {
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
                        data: fleeSucceededData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "PurchasedItems":
                console.log("PurchasedItems", raw.data);
                const purchasedItemsData = {
                    adventurerStateWithBag: {
                        adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                        bag: parseBag(raw.data.slice(40, 73)),
                    },
                    // Skip array length
                    purchases: parseItems(raw.data.slice(75)),
                };
                events.push({
                    name: eventName, data: {
                        data: purchasedItemsData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "PurchasedPotions":
                console.log("PurchasedPotions", raw.data);
                const purchasedPotionsData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    quantity: parseInt(raw.data[40]),
                    cost: parseInt(raw.data[41]),
                    health: parseInt(raw.data[42]),
                };
                events.push({
                    name: eventName, data: {
                        data: purchasedPotionsData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "EquippedItems":
                console.log("EquippedItems", raw.data);
                const { equippedItems, unequippedItems } = parseEquippedItems(
                    // Include equipped array length
                    raw.data.slice(74)
                );
                const equippedItemsData = {
                    adventurerStateWithBag: {
                        adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                        bag: parseBag(raw.data.slice(40, 73)),
                    },
                    equippedItems: equippedItems,
                    unequippedItems: unequippedItems,
                };
                events.push({
                    name: eventName, data: {
                        data: equippedItemsData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "DroppedItems":
                console.log("DroppedItems", raw.data);
                const itemIds = [];
                // Skip array length
                const itemsData = raw.data.slice(75);
                for (let i = 0; i < itemsData.length; i++) {
                    itemIds.push(parseInt(itemsData[i]));
                }
                const droppedItemsData = {
                    adventurerStateWithBag: {
                        adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                        bag: parseBag(raw.data.slice(40, 73)),
                    },
                    itemIds: itemIds,
                };
                events.push({
                    name: eventName, data: {
                        data: droppedItemsData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "GreatnessIncreased":
                console.log("GreatnessIncreased", raw.data);
                const greatnessIncreasedData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    itemId: parseInt(raw.data[40]),
                    previousLevel: parseInt(raw.data[41]),
                    newLevel: parseInt(raw.data[42]),
                };
                events.push({
                    name: eventName, data: {
                        data: greatnessIncreasedData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "ItemsLeveledUp":
                console.log("ItemsLeveledUp", raw.data);
                const itemsLeveledUpData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    // Skip items length
                    items: parseItemLevels(raw.data.slice(41)),
                };

                events.push({
                    name: eventName, data: {
                        data: itemsLeveledUpData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            case "NewHighScore":
                console.log("NewHighScore", raw.data);
                const newHighScoreData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    rank: parseInt(raw.data[40]),
                };
                events.push({
                    name: eventName, data: {
                        data: newHighScoreData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
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
                const newItems = raw.data.slice(41);
                const newItemsIds = [];
                for (let i = 0; i < newItems.length; i++) {
                    newItemsIds.push(parseInt(newItems[i]));
                }
                const newItemsAvailableData = {
                    adventurerState: parseAdventurerState(raw.data.slice(0, 39)),
                    // Skip array length
                    items: newItemsIds,
                };
                events.push({
                    name: eventName, data: {
                        data: newItemsAvailableData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
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
            case "ResUpdate":
                console.log("ResUpdate", raw.data);

                //     struct AdventurerRes {
                //     egg:u16,//9 bits
                //         meat:u16,
                //         fish:u16,
                //         soft_skin:u16,
                //         crusty:u16,
                //         berry:u16,
                //         bamboo:u16,
                //         balsa_wood:u16,
                //         fir_wood:u16,
                //         teak:u16,
                //         hemlock:u16,
                //         mahogany:u16,
                //         pine:u16,
                //         coal:u16,
                //         copper:u16,
                //         iron:u16,
                //         silver:u16,
                //         sterling_silver:u16,
                //         graphite:u16,
                //         platinum:u16,
                //         last_timestamp:u64,
                // }
                const ResUpdateData = {

                    adventurer_res: {
                        egg: parseInt(raw.data[0]),
                        meat: parseInt(raw.data[1]),
                        fish: parseInt(raw.data[2]),
                        soft_skin: parseInt(raw.data[3]),
                        preventsy: parseInt(raw.data[4]),
                        berry: parseInt(raw.data[5]),
                        bamboo: parseInt(raw.data[6]),
                        balsa_wood: parseInt(raw.data[7]),
                        fir_wood: parseInt(raw.data[8]),
                        teak: parseInt(raw.data[9]),
                        hemlock: parseInt(raw.data[10]),
                        mahogany: parseInt(raw.data[11]),
                        pine: parseInt(raw.data[12]),
                        coal: parseInt(raw.data[13]),
                        copper: parseInt(raw.data[14]),
                        iron: parseInt(raw.data[15]),
                        silver: parseInt(raw.data[16]),
                        sterling_silver: parseInt(raw.data[17]),
                        graphite: parseInt(raw.data[18]),
                        platinum: parseInt(raw.data[19]),
                        last_timestamp: parseInt(raw.data[20]),
                    },
                    changed: {
                        egg: parseInt(raw.data[21]),
                        meat: parseInt(raw.data[22]),
                        fish: parseInt(raw.data[23]),
                        soft_skin: parseInt(raw.data[24]),
                        preventsy: parseInt(raw.data[25]),
                        berry: parseInt(raw.data[26]),
                        bamboo: parseInt(raw.data[27]),
                        balsa_wood: parseInt(raw.data[28]),
                        fir_wood: parseInt(raw.data[29]),
                        teak: parseInt(raw.data[30]),
                        hemlock: parseInt(raw.data[31]),
                        mahogany: parseInt(raw.data[32]),
                        pine: parseInt(raw.data[33]),
                        coal: parseInt(raw.data[34]),
                        copper: parseInt(raw.data[35]),
                        iron: parseInt(raw.data[36]),
                        silver: parseInt(raw.data[37]),
                        sterling_silver: parseInt(raw.data[38]),
                        graphite: parseInt(raw.data[39]),
                        platinum: parseInt(raw.data[40]),
                        last_timestamp: parseInt(raw.data[41]),
                    }
                };
                events.push({
                    name: eventName, data: {
                        data: ResUpdateData,
                        event_name: eventName,
                        transaction_hash: receipt.transaction_hash
                    }
                });
                break;
            default:
                console.error("unknown event: " + eventName, raw.data);
                break;
        }

    }

    return events;
}
