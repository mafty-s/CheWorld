import {Buffer} from "buffer";

export function stringToFelt(str) {
    return "0x" + Buffer.from(str).toString("hex");
}

export const getRandomNumber = (to) => {
    return (Math.floor(Math.random() * to) + 1).toString();
};


export function getKeyFromValue(
    data,
    value
) {
    for (const key in data) {
        if (data[key] === value) {
            return key;
        }
    }
    return null;
}

export function convertToBoolean(value) {
    return value === 1;
}
