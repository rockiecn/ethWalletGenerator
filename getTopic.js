//const hre = require("hardhat");
const web3 = require("web3")

async function main() {
    const topic0 = web3.utils.sha3("ReAcc(address,uint64)");
    const topic1 = web3.utils.sha3("Pledge(address,uint256)");
    const topic2 = web3.utils.sha3("AddOwner(address,bool)")
    const topic3 = web3.utils.sha3("AlterPayee(address,address)")
    const topic4 = web3.utils.sha3("AddOrder(uint8,uint64,uint64,uint64,uint64,uint64,uint256)")
    const topic5 = web3.utils.sha3("ReAcc(address,uint64)")

    console.log("ReAcc(address,uint64) topic ", topic0);
    console.log("Pledge(address,uint256) topic ", topic1);
    console.log("AddOwner(address,bool) topic ", topic2);
    console.log("AlterPayee(address,address) topic ", topic3);
    console.log("AddOrder(uint8,uint64,uint64,uint64,uint64,uint64,uint256) topic ", topic4);	
    console.log("ReAcc(address,uint64) topic ", topic5);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
  });
