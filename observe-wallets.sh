#!/bin/bash
(
echo;
date;
echo;
node observe-ref-wallets.js;
echo;
node observe-miner-wallets.js;
echo;
node observe-proxy-wallets.js;
echo;
node observe-blockchain-wallets.js;
echo -e "\n---\n";
) | tee -a log-observed.txt