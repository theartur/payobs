var observer = require('./observe-wallets.js');

// BITCOIN:
// 1HyRvBxLk81RrS5nFeqF3UUKvvA1yiEHhk

// DASH:
// XbskBinMqQ6VNEEZk6Fn86R7ytB9bRDZmb

// DOGE:
// DGe54qQE9tymV6eutSgBrZYZaU5oncdE6a

// LITECOIN:
// LM7K113pRE1DJaJmks2CzcZdQfvdZP7qte

var wallets = [
    '1HyRvBxLk81RrS5nFeqF3UUKvvA1yiEHhk',
    'XbskBinMqQ6VNEEZk6Fn86R7ytB9bRDZmb',
    'DGe54qQE9tymV6eutSgBrZYZaU5oncdE6a',
    'LM7K113pRE1DJaJmks2CzcZdQfvdZP7qte'
];

console.log("PROXY WALLETS: ", wallets.length);

observer(wallets);