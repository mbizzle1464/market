const axios = require('axios');

const res = "https://api.iextrading.com/1.0/stock/market/news/";

const query = function () {

    axios.get(res).then(function (response) {
        console.log(response);
        return res.json();
        
    });

}

module.exports = query;   