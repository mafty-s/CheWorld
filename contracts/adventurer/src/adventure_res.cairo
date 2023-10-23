
//The maximum value of an unsigned 32-bit integer (u32) is (2^32 - 1), which is 4,294,967,295.
#[derive(Drop, Copy, Serde)]
struct AdventurerRes {
    egg:u16,
    meat:u16,
    fish:u16,
}
