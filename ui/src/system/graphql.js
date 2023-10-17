import axios from "axios";

const url = "http://3.29.249.78:8080/graphql";

const getAdventure = async () => {

    let data = JSON.stringify({
        "query": "query MyQuery {\n  adventurers {\n    gold\n  }\n}",
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


    const resp = axios.request(config);
    console.log('resp','resp')
}