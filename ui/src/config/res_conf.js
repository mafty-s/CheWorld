export const ResConfig = [{
    "id": "1", "name": "Egg", "type": "1", "refresh": "1", "icon": "", "maxnum": "200"
}, {"id": "2", "name": "Meat", "type": "1", "refresh": "1", "icon": "", "maxnum": "200"}, {
    "id": "3", "name": "Fish", "type": "1", "refresh": "1", "icon": "", "maxnum": "200"
}, {"id": "4", "name": "soft skin", "type": "2", "refresh": "1", "icon": "", "maxnum": "200"}, {
    "id": "5", "name": "crusty", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "6", "name": "Berry", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"}, {
    "id": "7", "name": "Bamboo", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "8", "name": "Balsa wood", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"}, {
    "id": "9", "name": "Fir wood", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "10", "name": "Teak", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"}, {
    "id": "11", "name": "Hemlock", "type": "2", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "12", "name": "Mahogany", "type": "2", "refresh": "2", "icon": "", "maxnum": "300"}, {
    "id": "13", "name": "Pine", "type": "2", "refresh": "2", "icon": "", "maxnum": "300"
}, {"id": "14", "name": "Coal", "type": "3", "refresh": "1", "icon": "", "maxnum": "200"}, {
    "id": "15", "name": "Copper", "type": "3", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "16", "name": "Iron", "type": "3", "refresh": "2", "icon": "", "maxnum": "500"}, {
    "id": "17", "name": "Silver", "type": "3", "refresh": "2", "icon": "", "maxnum": "500"
}, {"id": "18", "name": "Sterling silver", "type": "3", "refresh": "2", "icon": "", "maxnum": "500"}, {
    "id": "19", "name": "Graphite", "type": "3", "refresh": "2", "icon": "", "maxnum": "300"
}, {"id": "20", "name": "Platinum", "type": "3", "refresh": "2", "icon": "", "maxnum": "300"}];


export function name2key(originalString){
    const transformedString = originalString.toLowerCase().replace(/\s+/g, '_');
    return transformedString;
}

export function key2name(originalString){
    const transformedString = originalString.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return transformedString;
}

export function getResConfigByByName(name){
    return ResConfig.filter(res => res.name === name)[0];
}

export function getResConfigById(id){
    return ResConfig.filter(res => res.id === id)[0];
}

export function getResConfigByType(type){
    return ResConfig.filter(res => res.type === type.toString());
}

export function getResConfigByKey(key){
    const name = key2name(key);
    return ResConfig.filter(res => res.name === name)[0];
}