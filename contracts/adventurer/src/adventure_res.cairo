use pack::constants::pow;
use pack::pack::{Packing, rshift_split};

//The maximum value of an unsigned 32-bit integer (u32) is (2^32 - 1), which is 4,294,967,295.
#[derive(Drop, Copy, Serde)]
struct AdventurerRes {
    egg:u16,
    meat:u16,
    fish:u16,
}

impl PackingAdventurerRes of Packing<AdventurerRes> {
    fn pack(self: AdventurerRes) -> felt252 {
        (self.egg.into()).try_into()
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
