use pack::{pack::{Packing, rshift_split}, constants::{MASK_16, pow, MASK_8, MASK_BOOL, mask}};
use integer::{u8_overflowing_add, u16_overflowing_add, u16_overflowing_sub};
use option::OptionTrait;
use traits::{TryInto, Into};

//The maximum value of an unsigned 32-bit integer (u32) is (2^32 - 1), which is 4,294,967,295.
#[derive(Drop, Copy, Serde)]
struct AdventurerRes {
    egg:u16,
    meat:u16,
    fish:u16,
}

impl PackingAdventurerRes of Packing<AdventurerRes> {
    fn pack(self: AdventurerRes) -> felt252 {
        (self.egg.into()
            + self.meat.into() * pow::TWO_POW_9
            + self.fish.into() * pow::TWO_POW_18)
        .try_into()
        .expect('pack AdventurerRes')
    }

    fn unpack(packed: felt252) -> AdventurerRes {
        let packed = packed.into();
        let (packed, egg) = rshift_split(packed, pow::TWO_POW_9);
        let (packed, meat) = rshift_split(packed, pow::TWO_POW_18);
        let (packed, fish) = rshift_split(packed, pow::TWO_POW_27);

        AdventurerRes {
            egg: egg.try_into().expect('unpack AdventurerRes egg'),
            meat: meat.try_into().expect('unpack AdventurerRes meat'),
            fish: fish.try_into().expect('unpack AdventurerRes meat'),
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
        fish:3
    };

    let packed = res.pack();
    let unpacked: AdventurerRes = Packing::unpack(packed);
    assert(res.egg == unpacked.egg, 'egg');
    assert(res.meat == unpacked.meat, 'meat');
    assert(res.fish == unpacked.egg, 'fish');

}