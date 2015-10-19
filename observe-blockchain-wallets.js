var observer = require('./observe-wallets.js');

// BLOCKCHAIN WALLETS: BITCOIN:

var wallets = [
    "1KLruuKccfWcGwZUVHJsMrYkphfyCKZR17",
    "19Fpuj8zuakaagY1zMC2g7GRccVqnA6ZXF",
    "1FLEqgMhp2u8uWqw9E2LEWAj4QgmpcucX2",
    "1DE7uzUbeX9GV9nKyd7F6NEVCrk8Zt4TR4",
    "1DfM57w6MKHQ2GFagHHGwptJA2q8wdonSj",
    "1NbR8b69NzBd7iqebBtwDJMvEqViM8aJQn",
    "1Nw8Siv2GL8imx3mo6iDmoQh7KjSCdiBHS",
    "1G3ycDYQAABMTRS4N1697yNEc2YtTv3wUJ",
    "17trRKUmdEsjngTjd7JiDFDxpgij6UGLZ6",
    "16nHp9BjMYpNbwHNZcHLCzJyGccFBDSNLu",
    "1GQyGawKPMEjd9w5U7WSoRCmGYAHNQAATJ",
    "14f2HJrx15xC6p6qUqmXgbepGdXJqtvkMf",
    "175g8gNqL3ieLJJvrFDKUrFoTMwvs9Zmbo"
];

console.log("BLOCKCHAIN WALLETS: ", wallets.length);

observer(wallets);