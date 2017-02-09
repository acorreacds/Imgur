const CLIENT_ID = '1d6ca4e0a415d31';
const apiImgur = 'https://api.imgur.com/3';

var setInit = {mode: 'cors', headers: {Authorization: 'Client-ID ' + CLIENT_ID}};

fetch(apiImgur, setInit)
    .then( (response) => {return response.json()} );