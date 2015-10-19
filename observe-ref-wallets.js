var observer = require('./observe-wallets.js');

// REF WALLETS:

// BITCOIN: 1NnFcBCTTcmEYH4LCweFVogcxq6K21zWXf
// ♥ Dogecoin DOGECOIN: DTGBAyUM2t5qz3qQAMyUA6cwWvHnM6WjZ4
// ♥ Litecoin LITECOIN: LUz64yuE92BTTuh1QUAeUpohqwDfGdy1Mj
// ♥ Dash DASH: XtX1GTf8LuvYTLpnMmmrkVvQt7vTenSQ7z

var wallets = [
    '1NnFcBCTTcmEYH4LCweFVogcxq6K21zWXf',
    'DTGBAyUM2t5qz3qQAMyUA6cwWvHnM6WjZ4',
    'LUz64yuE92BTTuh1QUAeUpohqwDfGdy1Mj',
    'XtX1GTf8LuvYTLpnMmmrkVvQt7vTenSQ7z'
];

console.log("REF WALLETS: ", wallets.length);

observer(wallets);