import {hash} from "starknet";

export const SELECTOR_KEYS ={
    StartGame: hash.getSelectorFromName("StartGame"),
    AdventurerUpgraded: hash.getSelectorFromName("AdventurerUpgraded"),
    DiscoveredHealth: hash.getSelectorFromName("DiscoveredHealth"),
    DiscoveredGold: hash.getSelectorFromName("DiscoveredGold"),
    DiscoveredXP: hash.getSelectorFromName("DiscoveredXP"),
    DodgedObstacle: hash.getSelectorFromName("DodgedObstacle"),
    HitByObstacle: hash.getSelectorFromName("HitByObstacle"),
    DiscoveredBeast: hash.getSelectorFromName("DiscoveredBeast"),
    AmbushedByBeast: hash.getSelectorFromName("AmbushedByBeast"),
    AttackedBeast: hash.getSelectorFromName("AttackedBeast"),
    AttackedByBeast: hash.getSelectorFromName("AttackedByBeast"),
    SlayedBeast: hash.getSelectorFromName("SlayedBeast"),
    FleeFailed: hash.getSelectorFromName("FleeFailed"),
    FleeSucceeded: hash.getSelectorFromName("FleeSucceeded"),
    PurchasedItems: hash.getSelectorFromName("PurchasedItems"),
    PurchasedPotions: hash.getSelectorFromName("PurchasedPotions"),
    EquippedItems: hash.getSelectorFromName("EquippedItems"),
    DroppedItems: hash.getSelectorFromName("DroppedItems"),
    GreatnessIncreased: hash.getSelectorFromName("GreatnessIncreased"),
    ItemsLeveledUp: hash.getSelectorFromName("ItemsLeveledUp"),
    NewHighScore: hash.getSelectorFromName("NewHighScore"),
    AdventurerDied: hash.getSelectorFromName("AdventurerDied"),
    AdventurerLeveledUp: hash.getSelectorFromName("AdventurerLeveledUp"),
    NewItemsAvailable: hash.getSelectorFromName("NewItemsAvailable"),
    IdleDeathPenalty: hash.getSelectorFromName("IdleDeathPenalty"),
}

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

export async function parseEvents(receipt){
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
                console.log("startGameData",startGameData);
                // const startGameEvent = processData(
                //     startGameData,
                //     eventName,
                //     receipt.transaction_hash
                // );
                // events.push({name: eventName, data: startGameEvent});
                break;
        }

    }

    return events;
}
