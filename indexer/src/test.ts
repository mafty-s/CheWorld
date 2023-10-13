import type { Config } from "https://esm.sh/@apibara/indexer";
import type { Block, Starknet } from "https://esm.sh/@apibara/indexer/starknet";
import type { Mongo } from "https://esm.sh/@apibara/indexer/sink/mongo";
import type { Console } from "https://esm.sh/@apibara/indexer/sink/console";

import { insertTest } from "./utils/helpers.ts";

import {
    ADVENTURER_UPGRADED,
    DISCOVERED_GOLD,
    DISCOVERED_HEALTH,
    DISCOVERED_XP,
    parseAdventurerUpgraded,
    parseDiscoveredGold,
    parseDiscoveredHealth,
    parseDiscoveredXp,
    parseStartGame,
    START_GAME,
    PURCHASED_POTIONS,
    PURCHASED_ITEMS,
    ATTACKED_BY_BEAST,
    ADVENTURER_DIED,
    parseAdventurerDied,
    parseAttackedByBeast,
    AMBUSHED_BY_BEAST,
    parseAmbushedByBeast,
    ATTACKED_BEAST,
    SLAYED_BEAST,
    parseSlayedBeast,
    FLEE_FAILED,
    parseFleeFailed,
    FLEE_SUCCEEDED,
    parseFleeSucceeded,
    ITEMS_LEVELED_UP,
    parseItemsLeveledUp,
    EQUIPPED_ITEMS,
    parsePurchasedItems,
    parseEquippedItems,
    DROPPED_ITEMS,
    parseDroppedItems,
    HIT_BY_OBSTACLE,
    parseHitByObstacle,
    DODGED_OBSTACLE,
    parseDodgedObstacle,
    NEW_ITEMS_AVAILABLE,
    parseNewItemsAvailable,
    DISCOVERED_BEAST,
    parseDiscoveredBeast, parseTest,
} from "./utils/events.ts";


console.log(insertBattle)
console.log(parseNewItemsAvailable)

import { MONGO_CONNECTION_STRING, ITEMS_NUMBER } from "./utils/constants.ts";

const GAME = "0x05e921968f5b266f1194bfab91548c76b57ec6a6d9361bf2226de82c1751bbc7";
//const START = 882344;
const START = +(Deno.env.get("START") || 0);


const filter = {
    header: { weak: true },
    events: [
        { fromAddress: GAME, keys: [START_GAME] },

    ],
};

export const config: Config<Starknet, Mongo | Console> = {
    streamUrl: "https://goerli.starknet.a5a.ch",
    network: "starknet",
    filter,
    startingBlock: START,
    finality: "DATA_STATUS_PENDING",
    sinkType: "mongo",
    sinkOptions: {
        connectionString: MONGO_CONNECTION_STRING,
        database: "mongo_goerli",
        collectionName: "test",
        // @ts-ignore - indexer package not updated
        entityMode: true,
    },
};

export default function transform({ header, events }: Block) {
    const { timestamp } = header!;

    return events.flatMap(({ event, receipt }) => {
        switch (event.keys[0]) {
            case START_GAME: {
                const { value } = parseTest(event.data, 0);
                console.log(value)

                const itemInserts: any[] = [];

                itemInserts.push(
                    insertTest({
                        amount:value.adventurerState,
                        timestamp: new Date().toISOString(),
                    })
                );
                return [
                    ...itemInserts
                ];
            }

            default: {
                console.warn("Unknown event", event.keys[0]);
                return [];
            }
        }
    });
}
