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
    last_timestamp:u64,
}

impl PackingAdventurerRes of Packing<AdventurerRes> {
    fn pack(self: AdventurerRes) -> felt252 {
        (     self.egg.into()
            + self.meat.into() * pow::TWO_POW_9
            + self.fish.into() * pow::TWO_POW_18
            + self.soft_skin.into() * pow::TWO_POW_27
            + self.crusty.into() * pow::TWO_POW_36
            + self.berry.into() * pow::TWO_POW_45
            + self.bamboo.into() * pow::TWO_POW_54
            + self.balsa_wood.into() * pow::TWO_POW_63
            + self.fir_wood.into() * pow::TWO_POW_72
            + self.teak.into() * pow::TWO_POW_81
            + self.hemlock.into() * pow::TWO_POW_90
            + self.mahogany.into() * pow::TWO_POW_99
            + self.pine.into() * pow::TWO_POW_108
            + self.coal.into() * pow::TWO_POW_117
            + self.copper.into() * pow::TWO_POW_126
            + self.iron.into() * pow::TWO_POW_135
            + self.silver.into() * pow::TWO_POW_144
            + self.sterling_silver.into() * pow::TWO_POW_153
            + self.graphite.into() * pow::TWO_POW_162
            + self.platinum.into() * pow::TWO_POW_171,
            + self.last_timestamp.into() * pow::TWO_POW_207
        )
        .try_into()
        .expect('pack AdventurerRes')
    }

    fn unpack(packed: felt252) -> AdventurerRes {
        let packed = packed.into();
        let (packed, egg) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, meat) = rshift_split(packed, pow::TWO_POW_18);
        let (packed, fish) = rshift_split(packed, pow::TWO_POW_27);
        let (packed, soft_skin) = rshift_split(packed, pow::TWO_POW_36);
        let (packed, crusty) = rshift_split(packed, pow::TWO_POW_45);
        let (packed, berry) = rshift_split(packed, pow::TWO_POW_54);
        let (packed, bamboo) = rshift_split(packed, pow::TWO_POW_63);
        let (packed, balsa_wood) = rshift_split(packed, pow::TWO_POW_72);
        let (packed, fir_wood) = rshift_split(packed, pow::TWO_POW_81);
        let (packed, teak) = rshift_split(packed, pow::TWO_POW_90);
        let (packed, hemlock) = rshift_split(packed, pow::TWO_POW_99);
        let (packed, mahogany) = rshift_split(packed, pow::TWO_POW_108);
        let (packed, pine) = rshift_split(packed, pow::TWO_POW_117);
        let (packed, coal) = rshift_split(packed, pow::TWO_POW_126);
        let (packed, copper) = rshift_split(packed, pow::TWO_POW_135);
        let (packed, iron) = rshift_split(packed, pow::TWO_POW_144);
        let (packed, silver) = rshift_split(packed, pow::TWO_POW_153);
        let (packed, sterling_silver) = rshift_split(packed, pow::TWO_POW_162);
        let (packed, graphite) = rshift_split(packed, pow::TWO_POW_171);
        let (packed, platinum) = rshift_split(packed, pow::TWO_POW_180);
        let (packed, last_timestamp) = rshift_split(packed, pow::TWO_POW_180);

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
            sterling_silver: sterling_silver.try_into().expect('unpack AdventurerRes sterling_silver'),
            graphite: graphite.try_into().expect('unpack AdventurerRes graphite'),
            platinum: platinum.try_into().expect('unpack AdventurerRes platinum'),
            last_timestamp: last_timestamp.try_into().expect('unpack AdventurerRes last_timestamp'),
        }
    }

    // TODO: add overflow pack protection
    fn overflow_pack_protection(self: AdventurerRes) -> AdventurerRes {
        self
    }
}

#[cfg(test)]
#[test]
#[available_gas(50000000)]
fn test_res() {
    let res = AdventurerRes {
        egg:1,
        meat:2,
        fish:3,
        soft_skin:0,
        crusty:0,
        berry:0,
        bamboo:0,
        balsa_wood:0,
        fir_wood:0,
        teak:0,
        hemlock:0,
        mahogany:0,
        pine:0,
        coal:0,
        copper:0,
        iron:0,
        silver:0,
        sterling_silver:0,
        graphite:0,
        platinum:0,
        last_timestamp:0
    };

    let packed = res.pack();
    let unpacked: AdventurerRes = Packing::unpack(packed);
    assert(res.egg == unpacked.egg, 'egg');
    assert(res.meat == unpacked.meat, 'meat');
    assert(res.fish == unpacked.egg, 'fish');

}