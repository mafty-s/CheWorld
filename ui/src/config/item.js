export const items_config = [
    {"ID": 1, "NAME": "Berry", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 1, "STACK": 20},
    {"ID": 2, "NAME": "Egg", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 1, "STACK": 20},
    {"ID": 3, "NAME": "Meat", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 1, "STACK": 20},
    {"ID": 4, "NAME": "Fish", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 1, "STACK": 20},
    {"ID": 5, "NAME": "Soft skin", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 6, "NAME": "Crusty", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 7, "NAME": "Bamboo", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 8, "NAME": "Balsa wood", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 9, "NAME": "Fir wood", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 10, "NAME": "Teak", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 11, "NAME": "Hemlock", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 12, "NAME": "Pipa wood", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 13, "NAME": "Red pine wood", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 2, "STACK": 20},
    {"ID": 14, "NAME": "Coal", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 15, "NAME": "Copper", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 16, "NAME": "Iron", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 17, "NAME": "Silver", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 18, "NAME": "Sterling silver", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 19, "NAME": "Gold", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 20, "NAME": "Platinum", "ICON": "", "TYPE": 1, "SUBCLASS": 0, "SOURCE": 3, "STACK": 20},
    {"ID": 21, "NAME": "Roast meat", "ICON": "", "TYPE": 3, "SUBCLASS": 9, "SOURCE": 0, "STACK": 20},
    {"ID": 22, "NAME": "Fish soup", "ICON": "", "TYPE": 3, "SUBCLASS": 10, "SOURCE": 0, "STACK": 20},
    {"ID": 23, "NAME": "Head(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 1, "SOURCE": 0, "STACK": 1},
    {"ID": 24, "NAME": "Chest(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 2, "SOURCE": 0, "STACK": 1},
    {"ID": 25, "NAME": "Waist(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 3, "SOURCE": 0, "STACK": 1},
    {"ID": 26, "NAME": "Foot(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 4, "SOURCE": 0, "STACK": 1},
    {"ID": 27, "NAME": "Weapon(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 5, "SOURCE": 0, "STACK": 1},
    {"ID": 28, "NAME": "Hand(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 6, "SOURCE": 0, "STACK": 1},
    {"ID": 29, "NAME": "Neck(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 7, "SOURCE": 0, "STACK": 1},
    {"ID": 30, "NAME": "Ring(T5)", "ICON": "", "TYPE": 2, "SUBCLASS": 8, "SOURCE": 0, "STACK": 1},
];

export const composite_config = [
    {"ID": 21, "COMPOSITE": "3|1,7|10,14|10"},
    {"ID": 22, "COMPOSITE": "4|1,7|20,14|10"},
    {"ID": 23, "COMPOSITE": "15|20,8|20,14|20"},
    {"ID": 24, "COMPOSITE": "6|20,16|10"},
    {"ID": 25, "COMPOSITE": "5|20,15|10"},
    {"ID": 26, "COMPOSITE": "5|20,16|20,14|20"},
    {"ID": 27, "COMPOSITE": "5|20,15|20"},
    {"ID": 28, "COMPOSITE": "5|20,6|10"},
    {"ID": 29, "COMPOSITE": "15|20,16|20,17|20"},
    {"ID": 30, "COMPOSITE": "15|20,16|20"},
];

export const item_types = {
    materials: 1,
    equipments: 2,
    foods: 3,
    other: 4,
}

export const item_subtypes = {
    none: 0,
    head: 1,
    chest: 2,
    waist: 3,
    foot: 4,
    weapon: 5,
    hand: 6,
    nick: 7,
    ring: 8,
    meet: 9,
    soup: 10
}

export const getItemConfigById=(id)=>{
    for (let i=0;i<items_config.length;i++){
        let item = items_config[i];
        if(item.ID===id){
            return item;
        }
    }
}