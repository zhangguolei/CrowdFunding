const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "soon alert gossip this ancient wire modify other ribbon timber old hurdle";

module.exports = {
    networks: {
        ropsten: {
            provider: function(){
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/778db01084734907b9432e8e4621420c");
            },
            network_id: 3
        }
    }
};