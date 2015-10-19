var observer = require('./observe-wallets.js');

// MINER WALLETS:

// BITCOIN:
// 17izgP4vtti3pgr43ddBuqF5ztaPMup2wj

// DASH:
// Xe8FgVeoeoUurK9CbBL3XeDvydv5HMaC2q

// DOGE:
// DDfMXm9t3nj2udbBd2WYbSLxJcMUEW8GS6

// LITECOIN:
// LRBQstjyK9ma6mtcKxKnbmuwWbMREXfVPB

var wallets = [
    '17izgP4vtti3pgr43ddBuqF5ztaPMup2wj',
    'Xe8FgVeoeoUurK9CbBL3XeDvydv5HMaC2q',
    'DDfMXm9t3nj2udbBd2WYbSLxJcMUEW8GS6',
    'LRBQstjyK9ma6mtcKxKnbmuwWbMREXfVPB'
];

console.log("MINER WALLETS: ", wallets.length);

observer(wallets);