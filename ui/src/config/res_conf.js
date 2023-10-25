import {getRandomNumberIn} from "@/utils/index.js";
import {proxyRefs} from "vue";

export const ResConfig = [{
    "id": "1",
    "name": "Egg",
    "type": "1",
    "refresh": "1",
    "icon": "@/assets/images/set1.png",
    "maxnum": "200",
    "inform": "A poultry egg can be used to make food.",
    "pos": "40,40"
}, {
    "id": "2",
    "name": "Meat",
    "type": "1",
    "refresh": "1",
    "icon": "@/assets/images/set1.png",
    "maxnum": "200",
    "inform": "A fresh piece of meat that can be used to make food.",
    "pos": "40,30"
}, {
    "id": "3",
    "name": "Fish",
    "type": "1",
    "refresh": "1",
    "icon": "@/assets/images/set1.png",
    "maxnum": "200",
    "inform": "A lively fish that can be used to make food.",
    "pos": "45,70"
}, {
    "id": "4",
    "name": "soft skin",
    "type": "2",
    "refresh": "1",
    "icon": "@/assets/images/set1.png",
    "maxnum": "200",
    "inform": "A piece of soft plant leather that can be used to craft equipment.",
    "pos": "60,60"
}, {
    "id": "5",
    "name": "crusty",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of tough plant leather that can be used to craft equipment.",
    "pos": "60,35"
}, {
    "id": "6",
    "name": "Berry",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A juicy berry that serves as A small amount of recovery items",
    "pos": "70,80"
}, {
    "id": "7",
    "name": "Bamboo",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A cut segment of bamboo that can be used to make simple tools or weapons.",
    "pos": "30,20"
}, {
    "id": "8",
    "name": "Balsa wood",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of lightweight balsa wood that can be used to make tools or weapons.",
    "pos": "70,25"
}, {
    "id": "9",
    "name": "Fir wood",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of sturdy fir wood that can be used to make durable tools or weapons.",
    "pos": "65,30"
}, {
    "id": "10",
    "name": "Teak",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of hard teak wood that can be used to make sturdy and durable tools or weapons.",
    "pos": "60,70"
}, {
    "id": "11",
    "name": "Hemlock",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of hard hemlock wood that can be used to make sturdy tools or weapons.",
    "pos": "55,60"
}, {
    "id": "12",
    "name": "Mahogany",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "300",
    "inform": "A piece of hard mahogany wood that can be used to make exquisite yet sturdy tools or weapons.",
    "pos": "50,80"
}, {
    "id": "13",
    "name": "Pine",
    "type": "2",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "300",
    "inform": "A piece of lightweight and resilient pine wood that can be used to make simple tools or weapons.",
    "pos": "55,85"
}, {
    "id": "14",
    "name": "Coal",
    "type": "3",
    "refresh": "1",
    "icon": "@/assets/images/set1.png",
    "maxnum": "200",
    "inform": "A black lump of coal that can be used as fuel.",
    "pos": "45,70"
}, {
    "id": "15",
    "name": "Copper",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of copper metal that can be used to make tools, weapons or electrical wires.",
    "pos": "40,65"
}, {
    "id": "16",
    "name": "Iron",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of iron metal that can be used to craft tools and equipment.",
    "pos": "35,65"
}, {
    "id": "17",
    "name": "Silver",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A piece of silver ore that can be used to craft fine tools and advanced equipment.",
    "pos": "65,80"
}, {
    "id": "18",
    "name": "Sterling silver",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "500",
    "inform": "A crafting material that is purer than silver ore and is very rare.",
    "pos": "50,40"
}, {
    "id": "19",
    "name": "Graphite",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "300",
    "inform": "As one of the softest minerals, it can be used to make glass products.",
    "pos": "65,40"
}, {
    "id": "20",
    "name": "Platinum",
    "type": "3",
    "refresh": "2",
    "icon": "@/assets/images/set1.png",
    "maxnum": "300",
    "inform": "A shiny, malleable silver-white metal that can be used to craft advanced tools and rare equipment.",
    "pos": "20,30"
}];

export const ResType = [
    'None',
    'Animal',
    'Plant',
    'Mineral',
]


export function getResConfig() {
    let result = [];
    for (let i = 0; i < ResConfig.length; i++) {
        let item = ResConfig[i];
        let pos = item.pos.split(',');
        item.x = pos[0];
        item.y = pos[1];
        result.push(item);
    }
    console.log(result);
    return result;
}


export function key2id(originalString) {
    const keys = ['egg',//9 bits
        'meat',
        'fish',
        'soft_skin',
        'crusty',
        'berry',
        'bamboo',
        'balsa_wood',
        'fir_wood',
        'teak',
        'hemlock',
        'mahogany',
        'pine',
        'coal',
        'copper',
        'iron',
        'silver',
        'sterling_silver',
        'graphite',
        'platinum'];

    return keys.indexOf(originalString)+1;

}

export function getResConfigByByName(name) {
    return ResConfig.filter(res => res.name === name)[0];
}

export function getResConfigById(id) {
    return ResConfig.filter(res => res.id === id)[0];
}

export function getResConfigByType(type) {
    return ResConfig.filter(res => res.type === type.toString());
}

export function getResConfigByKey(key) {
    const id = key2id(key);
    const res = ResConfig.filter(res => res.id === id.toString())[0];
    if (res == null) {
        console.error("res is null", id, key);
    }
    return res;
}