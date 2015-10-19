var request = require('request');
var cheerio = require('cheerio');

var wallet = '1HyRvBxLk81RrS5nFeqF3UUKvvA1yiEHhk';

var ajaxUrl = 'https://faucetbox.com/en/ajax/address_checker/' + wallet;
var url = 'https://faucetbox.com/check/' + wallet;

var options = {
    url: ajaxUrl,
    gzip: true,
    headers: {
        'referer': url
    }
};

console.log("requesting...");

var elapsed = +new Date;
request(options, function(err, resp, body){
    console.log("DONE ... bytes: ", body.length);
    var info;
    
    try {
        info = JSON.parse(body);
    } catch (e) {
        throw new Error('Could not parse response');
    }

    elapsed = (+new Date) - elapsed;
        
    var currency = info.currency;
    var totalPending = info.pending;

    sumCurrencyTotal(currency, totalPending);
    
    console.log("( " + elapsed + " ms ) Accumulated: ", info.pending);

});

var currencyTotal = {};
function sumCurrencyTotal (currency, totalPending) {
    if (currency && totalPending) {
        currencyTotal[currency] = currencyTotal[currency] || 0;
        currencyTotal[currency] += totalPending;
    }
}

function showCurrencyTotal () {
    console.log("---");
    Object.keys(currencyTotal).forEach(function (currency) {
        console.log(currency, currencyTotal[currency]);
    });
    console.log("---");
}