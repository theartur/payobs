var request = require('request');

var waitSequence = 0;

function getWalletValue(wallet, elapsed) {
    var ajaxUrl = 'https://faucetbox.com/en/ajax/address_checker/' + wallet;
    var url = 'https://faucetbox.com/check/' + wallet;

    var options = {
        url: ajaxUrl,
        gzip: true,
        headers: {
            'referer': url
        }
    };

//     console.log("requesting " + wallet.substr(0, 5) + "...");

    elapsed = elapsed || +new Date;
    request(options, function(err, resp, body){
//         console.log("DONE... bytes: ", body.length);
//         console.log(".");
        var info;

        try {
            info = JSON.parse(body);
        } catch (e) {
//             throw new Error('Could not parse response');
            info = {status: "try_later"};
        }
        
        if (info.status == "try_later") {
//             console.log("Trying again for ( " + elapsed + " ms ) [ " + wallet.substr(0, 5) + " ] ...");
            getWalletValue(wallet);
            return;
        }
        
        elapsed = (+new Date) - elapsed;
        
        var currency = info.currency;
        var totalPending = info.pending;
        
        sumCurrencyTotal(currency, totalPending);
        
        console.log("( " + elapsed + " ms ) \t [ " + wallet + " ] Total: ", info.currency + " " + info.pending);

        if (totalCurrentWallets == processedWallets) {
            showCurrencyTotal();
        }
    });
}

function sequencer(wallet) {
    setTimeout(function () {
        getWalletValue(wallet);
    }, waitSequence);
    
//     waitSequence += 1000;
}

var currencyTotal = {};
function sumCurrencyTotal (currency, totalPending) {
    processedWallets++;
    
    if (currency && totalPending) {
        currencyTotal[currency] = currencyTotal[currency] || 0;
        currencyTotal[currency] += parseFloat(totalPending, 10);
    }
}

function showCurrencyTotal () {
    console.log("");
    Object.keys(currencyTotal).forEach(function (currency) {
        console.log("> TOTAL " + currency + ": ", currencyTotal[currency].toFixed(8));
    });
}

// wallets.forEach(sequencer);

var totalCurrentWallets, processedWallets;
module.exports = function observeWallets(wallets) {
    totalCurrentWallets = wallets.length;
    processedWallets = 0;
    if (typeof wallets == "string") {
         getWalletValue(wallets);
    } else {
        wallets.forEach(sequencer);
    }
};