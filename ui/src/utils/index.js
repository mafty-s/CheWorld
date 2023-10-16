import {Buffer} from "buffer";

export function stringToFelt(str) {
    return "0x" + Buffer.from(str).toString("hex");
}

export const getRandomNumber = (to) => {
    return (Math.floor(Math.random() * to) + 1).toString();
};
