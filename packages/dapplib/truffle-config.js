require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success struggle remember oil purse harvest ghost army genuine'; 
let testAccounts = [
"0x6e4109899dddee35df1364af2f3610e8d854d950d0efddd6e03d8441547689b2",
"0x1238547a8e8a0d028d284e9e7b3e0a201e1a1ceafea460cbee3271ee37b6b434",
"0xa003b84e5811caf67fa9e1567966c3689fd19b4e596319a92023fbb2391ab58d",
"0xf45c06b53beb3c9f342f9b207ff6804f3d350877a2c5514b63f704aebbd7b383",
"0x4ba874f6bcf72e62b75bbc5435c62a819bfc5bc34288325214a0f4678dd6de54",
"0x7627aa0c1ca208ecb611bbdb4d882e9f3b71b3ef6933e075b79c4216cd20b425",
"0xbf7759f7abfd29a00b57ec3d453045f1b095d2f6196157304c894ba548a9123e",
"0x2a9ea7c394ff597fc3ae70b485530c832e466c893f92e5b0d20ee849cd1e74ef",
"0x3a118379a5154c44b018118d77bd9c619686f6c518e8e31a64f7e0f20cc548bb",
"0xddccc1e17438d08582a7d8a9bcdbe672696902bb58e88f5eac2ecfa33dae7ec0"
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
            version: '^0.5.11'
        }
    }
};
