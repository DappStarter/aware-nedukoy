require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski street crawl mushroom pulp hunt sister army genius'; 
let testAccounts = [
"0xaba3c91f4b948bc2202eded906c2b6c7fb209556933739ea46a3685d9f601806",
"0xc80f4e68be8b151359236160ff58f7ed38fcca8167bc0ef9be0e916d16c90670",
"0x71ada4ad053286e0f4e67934f2ec48433b36f5fbcb28cff9d7a375d0440484a8",
"0x423d581ef2799b3044fc430416284ccc8c9329ac591aadb659a1fbc174a2bfac",
"0xb6c249b02fc20f9667962b6439dc6072d2c02fda50cb0c9318a2cb6ce7c8f9e0",
"0xa0cf493aa1e2ed8bd18035c8829f7d2920cda24adee791cbf0552ae5493deee2",
"0x57c652527117e37aef4328bdb0fa3bd3e86144062d1dae3924e6610942540e64",
"0x838188a1345b732eafdb02c2fb8cfb934aafff66b0d968cea362d0eadb0143f8",
"0x24d7705e33295471c79dd9099891ed853d6dde5aaeac2958f4bf35bf32332b81",
"0x27906c5c7eca95b727d768339dabd2c30ecc43342d00cc4e858bcb08937b5ffe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

