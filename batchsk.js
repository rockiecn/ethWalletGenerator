var Wallet = require('ethereumjs-wallet')
const fs = require('fs');


for(var i = 0; i < 1000; i++){
	    
	    const EthWallet = Wallet.default.generate(false);
	    
	    const addressALL = EthWallet.getAddressString();
	    const addr = addressALL + "\n";
	    console.log("address: " + EthWallet.getAddressString());

	    const privateKeyALL = EthWallet.getPrivateKeyString();
	    const pKey = privateKeyALL + "\n";
	    console.log("privateKey: " + EthWallet.getPrivateKeyString());
	    
		idAddr = i+': '+addr
	    fs.appendFile('result.txt', idAddr, (err) => {
		            if (err) throw err;
	    }); 
		idPK= i+': '+pKey

	    fs.appendFile('result.txt', idPK, (err) => {
		            if (err) throw err;
            }); 
}
