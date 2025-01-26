var axios = require("axios");
var fs = require('fs');

const token = "Token";

const req = (path) =>{
    
    var data = {
        'api_token': token,
        'file': fs.createReadStream(path),
        'return': '',
    };

    axios({
        method: 'post',
        url: 'https://api.audd.io/',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) =>  {
        console.log(error);
    });
}

const largeReq = (path) =>{
    var data = {
        'api_token': token,
        'file': fs.createReadStream(path),
        'accurate_offsets': 'true',
        'skip': '3',
        'every': '1',
    };
    
    axios({
        method: 'post',
        url: 'https://enterprise.audd.io/',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
        console.log(response);
        response.data.result.forEach(results => {
            results.songs.forEach(songs =>{
                console.log(songs.artist);
                console.log(songs.title);
                console.log(songs.album);
                console.log(songs.song_link);
            });
        });
    })
    .catch((error) =>  {
        console.log(error);
    });
}


/*
var data = {
    'api_token': '',
    'file': fs.createReadStream(''),
};

axios({
    method: 'post',
    url: 'https://api.audd.io/recognizeWithOffset/',
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' },
})
.then((response) => {
    console.log(response);
})
.catch((error) =>  {
    console.log(error);
});
*/

largeReq("")