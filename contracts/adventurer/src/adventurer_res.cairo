use pack::{pack::{Packing, rshift_split}, constants::{MASK_16, pow, MASK_8, MASK_BOOL, mask}};
use integer::{u8_overflowing_add, u16_overflowing_add, u16_overflowing_sub};
use option::OptionTrait;
use traits::{TryInto, Into};

//The maximum value of an unsigned 32-bit integer (u32) is (2^32 - 1), which is 4,294,967,295.
#[derive(Drop, Copy, Serde)]
struct AdventurerRes {
    egg:u16,//9 bits
    meat:u16,
    fish:u16,
    soft_skin:u16,
    crusty:u16,
    berry:u16,
    bamboo:u16,
    balsa_wood:u16,
    fir_wood:u16,
    teak:u16,
    hemlock:u16,
    mahogany:u16,
    pine:u16,
    coal:u16,
    copper:u16,
    iron:u16,
    silver:u16,
    sterling_silver:u16,
    graphite:u16,
    platinum:u16,
    roast_meat:u16,
    last_timestamp:u64,
}


// #[inline(always)]
// fn get_item_at_slot( slot: Slot) -> ItemPrimitive {
//     match slot {
//         Slot::None(()) => ItemPrimitive { id: 0, xp: 0, metadata: 0 },
//         Slot::Weapon(()) => self.weapon,
//         Slot::Chest(()) => self.chest,
//         Slot::Head(()) => self.head,
//         Slot::Waist(()) => self.waist,
//         Slot::Foot(()) => self.foot,
//         Slot::Hand(()) => self.hand,
//         Slot::Neck(()) => self.neck,
//         Slot::Ring(()) => self.ring,
//     }
// }

// impl AdventurerRes {
//     fn new() -> Self {
//         Self {
//             egg:0,
//             meat:0,
//             fish:0,
//             soft_skin:0,
//             berry:0,
//             bamboo:0,
//             balsa_wood:0,
//             fir_wood:0,
//             teak:0,
//             hemlock:0,
//             mahogany:0,
//             pine:0,
//             coal:0,
//             copper:0,
//             iron:0,
//             silver:0,
//             sterling_silver:0,
//             graphite:0,
//             platinum:0,
//             roast_meat:0,
//             last_timestamp:0,
//             crusty: 0,
//         }
// }

impl PackingAdventurerRes of Packing<AdventurerRes> {
    fn pack(self: AdventurerRes) -> felt252 {
        (
              self.last_timestamp.into()
            + self.egg.into() * pow::TWO_POW_32
            + self.meat.into() * pow::TWO_POW_41
            + self.fish.into() * pow::TWO_POW_50
            + self.soft_skin.into() * pow::TWO_POW_59
            + self.crusty.into() * pow::TWO_POW_68
            + self.berry.into() * pow::TWO_POW_77
            + self.bamboo.into() * pow::TWO_POW_86
            + self.balsa_wood.into() * pow::TWO_POW_95
            + self.fir_wood.into() * pow::TWO_POW_104
            + self.teak.into() * pow::TWO_POW_113
            + self.hemlock.into() * pow::TWO_POW_122
            + self.mahogany.into() * pow::TWO_POW_131
            + self.pine.into() * pow::TWO_POW_140
            + self.coal.into() * pow::TWO_POW_149
            + self.copper.into() * pow::TWO_POW_158
            + self.iron.into() * pow::TWO_POW_167
            + self.silver.into() * pow::TWO_POW_176
            + self.sterling_silver.into() * pow::TWO_POW_185
            + self.graphite.into() * pow::TWO_POW_194
            + self.platinum.into() * pow::TWO_POW_203
            + self.roast_meat.into() * pow::TWO_POW_212
        )
        .try_into()
        .expect('pack AdventurerRes')
    }

    fn unpack(packed: felt252) -> AdventurerRes {
        let packed = packed.into();
        let (packed, last_timestamp) = rshift_split(packed, pow::TWO_POW_32);
        let (packed, egg) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, meat) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, fish) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, soft_skin) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, crusty) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, berry) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, bamboo) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, balsa_wood) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, fir_wood) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, teak) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, hemlock) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, mahogany) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, pine) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, coal) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, copper) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, iron) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, silver) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, sterling_silver) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, graphite) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, platinum) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, roast_meat) = rshift_split(packed, pow::TWO_POW_9);

        AdventurerRes {
            egg: egg.try_into().expect('unpack AdventurerRes egg'),
            meat: meat.try_into().expect('unpack AdventurerRes meat'),
            fish: fish.try_into().expect('unpack AdventurerRes fish'),
            soft_skin: soft_skin.try_into().expect('unpack AdventurerRes soft_skin'),
            crusty: crusty.try_into().expect('unpack AdventurerRes crusty'),
            berry: berry.try_into().expect('unpack AdventurerRes berry'),
            bamboo: bamboo.try_into().expect('unpack AdventurerRes bamboo'),
            balsa_wood: balsa_wood.try_into().expect('unpack AdventurerRes balsa_wood'),
            fir_wood: fir_wood.try_into().expect('unpack AdventurerRes fir_wood'),
            teak: teak.try_into().expect('unpack AdventurerRes teak'),
            hemlock: hemlock.try_into().expect('unpack AdventurerRes hemlock'),
            mahogany: mahogany.try_into().expect('unpack AdventurerRes mahogany'),
            pine: pine.try_into().expect('unpack AdventurerRes pine'),
            coal: coal.try_into().expect('unpack AdventurerRes coal'),
            copper: copper.try_into().expect('unpack AdventurerRes copper'),
            iron: iron.try_into().expect('unpack AdventurerRes iron'),
            silver: silver.try_into().expect('unpack AdventurerRes silver'),
            sterling_silver: sterling_silver.try_into().expect('unpack AdRes sterling_silver'),
            graphite: graphite.try_into().expect('unpack AdventurerRes graphite'),
            platinum: platinum.try_into().expect('unpack AdventurerRes platinum'),
            roast_meat: roast_meat.try_into().expect('unpack AdventurerRes roast_meat'),
            last_timestamp: last_timestamp.try_into().expect('unpack AdRes last_timestamp'),
        }
    }

    // TODO: add overflow pack protection
    fn overflow_pack_protection(self: AdventurerRes) -> AdventurerRes {
        let mut overflow_protected_stats = self;

        if self.egg > MAX_RES_EGG_VALUE {
            overflow_protected_stats.egg = MAX_RES_EGG_VALUE;
        };
        if self.meat > MAX_RES_MEAT_VALUE {
            overflow_protected_stats.meat = MAX_RES_MEAT_VALUE;
        };
        if self.fish > MAX_RES_FISH_VALUE {
            overflow_protected_stats.fish = MAX_RES_FISH_VALUE;
        };
        if self.soft_skin > MAX_RES_SOFT_SKIN_VALUE {
            overflow_protected_stats.soft_skin = MAX_RES_SOFT_SKIN_VALUE;
        };
        if self.berry > MAX_RES_BERRY_VALUE {
            overflow_protected_stats.berry = MAX_RES_BERRY_VALUE;
        };
        if self.bamboo > MAX_RES_BAMBOO_VALUE {
            overflow_protected_stats.bamboo = MAX_RES_BAMBOO_VALUE;
        };
        if self.balsa_wood > MAX_RES_BALSA_WOOD_VALUE {
            overflow_protected_stats.balsa_wood = MAX_RES_BALSA_WOOD_VALUE;
        };
        if self.fir_wood > MAX_RES_FIR_WOOD_VALUE {
            overflow_protected_stats.fir_wood = MAX_RES_FIR_WOOD_VALUE;
        };
        if self.teak > MAX_RES_TEAK_VALUE {
            overflow_protected_stats.teak = MAX_RES_TEAK_VALUE;
        };
        if self.hemlock > MAX_RES_HEMLOCK_VALUE {
            overflow_protected_stats.hemlock = MAX_RES_HEMLOCK_VALUE;
        };
        if self.mahogany > MAX_RES_MAHOGANY_VALUE {
            overflow_protected_stats.mahogany = MAX_RES_MAHOGANY_VALUE;
        };
        if self.pine > MAX_RES_PINE_VALUE {
            overflow_protected_stats.pine = MAX_RES_PINE_VALUE;
        };
        if self.coal > MAX_RES_COAL_VALUE {
            overflow_protected_stats.coal = MAX_RES_COAL_VALUE;
        };
        if self.copper > MAX_RES_COPPER_VALUE {
            overflow_protected_stats.copper = MAX_RES_COPPER_VALUE;
        };
        if self.iron > MAX_RES_IRON_VALUE {
            overflow_protected_stats.iron = MAX_RES_IRON_VALUE;
        };
        if self.silver > MAX_RES_SILVER_VALUE {
            overflow_protected_stats.silver = MAX_RES_SILVER_VALUE;
        };
        if self.sterling_silver > MAX_RES_STERLING_SILVER_VALUE {
            overflow_protected_stats.sterling_silver = MAX_RES_STERLING_SILVER_VALUE;
        };
        if self.graphite > MAX_RES_GRAPHITE_VALUE {
            overflow_protected_stats.graphite = MAX_RES_GRAPHITE_VALUE;
        };
        if self.platinum > MAX_RES_PLATINUM_VALUE {
            overflow_protected_stats.platinum = MAX_RES_PLATINUM_VALUE;
        };


        overflow_protected_stats
    }
}

const MAX_RES_EGG_VALUE: u16 = 200;
const MAX_RES_MEAT_VALUE: u16 = 200;
const MAX_RES_FISH_VALUE: u16 = 200;
const MAX_RES_SOFT_SKIN_VALUE: u16 = 200;
const MAX_RES_CRUSTY_VALUE: u16 = 500;
const MAX_RES_BERRY_VALUE: u16 = 500;
const MAX_RES_BAMBOO_VALUE: u16 = 500;
const MAX_RES_BALSA_WOOD_VALUE: u16 = 500;
const MAX_RES_FIR_WOOD_VALUE: u16 = 500;
const MAX_RES_TEAK_VALUE: u16 = 500;
const MAX_RES_HEMLOCK_VALUE: u16 = 500;
const MAX_RES_MAHOGANY_VALUE: u16 = 300;
const MAX_RES_PINE_VALUE: u16 = 300;
const MAX_RES_COAL_VALUE: u16 = 200;
const MAX_RES_COPPER_VALUE: u16 = 500;
const MAX_RES_IRON_VALUE: u16 = 500;
const MAX_RES_SILVER_VALUE: u16 = 500;
const MAX_RES_STERLING_SILVER_VALUE: u16 = 500;
const MAX_RES_GRAPHITE_VALUE: u16 = 300;
const MAX_RES_PLATINUM_VALUE: u16 = 300;


//scarb test
#[cfg(test)]
#[test]
#[available_gas(50000000)]
fn test_res() {
    let res = AdventurerRes {
        egg:1,
        meat:2,
        fish:3,
        soft_skin:4,
        crusty:5,
        berry:6,
        bamboo:7,
        balsa_wood:8,
        fir_wood:9,
        teak:10,
        hemlock:11,
        mahogany:12,
        pine:13,
        coal:14,
        copper:15,
        iron:16,
        silver:17,
        sterling_silver:18,
        graphite:19,
        platinum:20,
        roast_meat:21,
        last_timestamp:1698053747
    };

    let packed = res.pack();
    let unpacked: AdventurerRes = Packing::unpack(packed);
    assert(res.last_timestamp == unpacked.last_timestamp, 'last_timestamp');
    assert(res.egg == unpacked.egg, 'egg');
    assert(res.meat == unpacked.meat, 'meat');
    assert(res.fish == unpacked.fish, 'fish');
    assert(res.soft_skin == unpacked.soft_skin, 'soft_skin');
    assert(res.crusty == unpacked.crusty, 'crusty');
    assert(res.berry == unpacked.berry, 'berry');
    assert(res.bamboo == unpacked.bamboo, 'bamboo');
    assert(res.balsa_wood == unpacked.balsa_wood, 'balsa_wood');
    assert(res.fir_wood == unpacked.fir_wood, 'fir_wood');
    assert(res.teak == unpacked.teak, 'teak');
    assert(res.hemlock == unpacked.hemlock, 'hemlock');
    assert(res.mahogany == unpacked.mahogany, 'mahogany');
    assert(res.pine == unpacked.pine, 'pine');
    assert(res.coal == unpacked.coal, 'coal');
    assert(res.copper == unpacked.copper, 'copper');
    assert(res.iron == unpacked.iron, 'iron');
    assert(res.silver == unpacked.silver, 'silver');
    assert(res.sterling_silver == unpacked.sterling_silver, 'sterling_silver');
    assert(res.graphite == unpacked.graphite, 'graphite');
    assert(res.platinum == unpacked.platinum, 'platinum');


}