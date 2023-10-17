import axios from "axios";

const url = "http://3.29.249.78:8080/goerli-graphql";

export const getAdventure = async (owner) => {

    let query = 'query MyQuery {\n' +
        '  adventurers(\n' +
        '    where: {owner: {eq: "' + owner + '"}}\n' +
        '    orderBy: {createdTime: {asc: false}}\n' +
        '  ) {\n' +
        '    charisma\n' +
        '    chest\n' +
        '    classType\n' +
        '    createdTime\n' +
        '    id\n' +
        '    dexterity\n' +
        '    foot\n' +
        '    gold\n' +
        '    hand\n' +
        '    head\n' +
        '    health\n' +
        '    homeRealm\n' +
        '    intelligence\n' +
        '    lastAction\n' +
        '    lastUpdatedTime\n' +
        '    name\n' +
        '    neck\n' +
        '    owner\n' +
        '    ring\n' +
        '    statUpgrades\n' +
        '    strength\n' +
        '    timestamp\n' +
        '    vitality\n' +
        '    waist\n' +
        '    weapon\n' +
        '    wisdom\n' +
        '    xp\n' +
        '    beastHealth\n' +
        '  }\n' +
        '}';

    let data = JSON.stringify({
        "query": query,
        "operationName": "MyQuery"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        data: data
    };


    const resp = await axios.request(config);
    console.log('resp', resp)
    return resp.data;
}