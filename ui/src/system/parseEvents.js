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
                const startGameEvent = {
                    data: startGameData,
                    event_name: eventName,
                    transaction_hash: receipt.transaction_hash
                }
                // const startGameEvent = processData(
                //     startGameData,
                //     eventName,
                //     receipt.transaction_hash
                // );
                events.push({name: eventName, data: startGameEvent});
                break;
            case "AdventurerUpgraded":
                console.log("AdventurerUpgraded", raw.data);
                break;
            case "DiscoveredHealth":
                console.log("DiscoveredHealth", raw.data);
                break;
            case "DiscoveredGold":
                console.log("DiscoveredGold", raw.data);
                break;
            case "DiscoveredXP":
                console.log("DiscoveredXP", raw.data);
                break;
            case "DodgedObstacle":
                console.log("DodgedObstacle", raw.data);
                break;
            case "HitByObstacle":
                console.log("HitByObstacle", raw.data);
                break;
            case "DiscoveredBeast":
                console.log("DiscoveredBeast", raw.data);
                break;
            case "AmbushedByBeast":
                console.log("AmbushedByBeast", raw.data);
                break;
            case "AttackedBeast":
                console.log("AttackedBeast", raw.data);
                break;
            case "AttackedByBeast":
                console.log("AttackedByBeast", raw.data);
                break;
            case "SlayedBeast":
                console.log("SlayedBeast", raw.data);
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
                break;
            case "AdventurerLeveledUp":
                console.log("AdventurerLeveledUp", raw.data);
                break;
            case "NewItemsAvailable":
                console.log("NewItemsAvailable", raw.data);
                break;
            case "IdleDeathPenalty":
                console.log("IdleDeathPenalty", raw.data);
                break;

        }

    }

    return events;
}
