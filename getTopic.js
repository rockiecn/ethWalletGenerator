// 根据输入的函数字符串，计算它的topic并输出
// 使用：node getTopic.js "ProWithdraw(address,uint64,uint8,uint256,uint256)"
//const hre = require("hardhat");
const web3 = require("web3")

async function main() {
    const args = process.argv.slice(2);
    const str = args[0];

    const topic0 = web3.utils.sha3("ProWithdraw(address,uint64,uint8,uint256,uint256)");
    const topic1 = web3.utils.sha3("AddOrder(uint8,uint64,uint64,uint64,uint64,uint64,uint256)");
    const topic2 = web3.utils.sha3("SubOrder(uint8,uint64,uint64,uint64,uint64,uint64,uint256)");
    const topic3 = web3.utils.sha3("Pledge(address,uint64,uint256)");
    const topic4 = web3.utils.sha3("Unpledge(address,uint64,uint8,uint256,uint256)");
    const topic5 = web3.utils.sha3("Recharge(address,uint64,bool,uint8,uint256)");
    const topic6 = web3.utils.sha3("ProWithdraw(address,uint64,uint8,uint256,uint256)");
    const topic7 = web3.utils.sha3("Withdraw(address,uint64,uint8,uint256,uint256)");
    const topic8 = web3.utils.sha3("AddRepair(uint8,uint64,uint64,uint64,uint64,uint64,uint256)");
    const topic9 = web3.utils.sha3("Create(uint64,uint8,uint8,uint8,uint256,uint256,uint256,uint256,bytes)");
    const topic10 = web3.utils.sha3("ReAcc(address,uint64)");
    const topic11 = web3.utils.sha3("ReRole(uint8,uint64)");
    const topic12 = web3.utils.sha3("QuitRole(uint64)");
    const topic13 = web3.utils.sha3("SetG(uint64,uint64)");
    const topic14 = web3.utils.sha3("AlterPayee(address,address)");
    const topic15 = web3.utils.sha3("ConfirmPayee(address,address)");
    const topic16 = web3.utils.sha3("Transfer(address,address,uint256)");
    const topic17 = web3.utils.sha3("Issu(uint256,uint64,uint64)");

    console.log("ProWithdraw topic ", topic0);
    console.log("AddOrder topic ", topic1);
    console.log("SubOrder topic ", topic2);
    console.log("Pledge topic ", topic3);
    console.log("Unpledge topic ", topic4);
    console.log("Recharge topic ", topic5);
    console.log("ProWithdraw topic ", topic6);
    console.log("Withdraw topic ", topic7);
    console.log("AddRepair topic ", topic8);
    console.log("CreateGroup topic ", topic9);
    console.log("ReAcc topic ", topic10);
    console.log("ReRole topic ", topic11);
    console.log("QuitRole topic ", topic12);
    console.log("SetG topic ", topic13);
    console.log("AlterPayee topic ", topic14);
    console.log("ConfirmPayee topic ", topic15);
    console.log("Transfer topic ", topic16);
    console.log("Issu topic ", topic17);

    const topic = web3.utils.sha3(str);
    console.log(str, "topic:", topic);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
  });
