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
            + self.meat.into() * pow::TWO_POW_9)
        .try_into()
        .expect('pack AdventurerRes')
    }

    fn unpack(packed: felt252) -> AdventurerRes {
        let packed = packed.into();
        let (packed, egg) = rshift_split(packed, pow::TWO_POW_9);

        AdventurerRes {
            egg: egg.try_into().expect('unpack Adventurer last_action'),
            meat: 0,
            fish: 0,
        }
    }

    // TODO: add overflow pack protection
    fn overflow_pack_protection(self: AdventurerRes) -> AdventurerRes {
        self
    }
}
