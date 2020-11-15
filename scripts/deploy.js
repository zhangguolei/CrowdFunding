const path = require('path');
const Web3 = require('web3');
const config = require('config');
const fs = require('fs-extra');
const HDWalletProvider = require('truffle-hdwallet-provider');
// const WalletProvider = require('../config/truffle-config');


// 1. 拿到bytecode和接口
const contractPath = path.resolve(__dirname, '../compiled/ProjectList.json');
const {interface, bytecode} = require(contractPath);
console.log('**********************')
console.log(interface)
// 2. 配置provider
const provider = new HDWalletProvider(
    // 'soon alert gossip this ancient wire modify other ribbon timber old hurdle',
    // 'https://ropsten.infura.io/v3/778db01084734907b9432e8e4621420c',
    config.get('hdwallet'),
    config.get('infuraUrl'),
);
// const provider = WalletProvider.networks.ropsten.provider();

// 3. 初始化web3实例
const web3 = new Web3(provider);

(async () => {
    // 4. 获取钱包里的账户
    const accounts = await web3.eth.getAccounts();
    console.log('部署合约的账户：', accounts[0]);

    // 5. 创建合约实例并部署
    console.time('合约部署耗时');
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '5000000'});
    console.timeEnd('合约部署耗时');
    // console.log('合约部署成功：', result);

    contractAddress = result.options.address;
    console.log('合约部署成功：', contractAddress);
    console.log('合约查看地址', `https://ropsten.etherscan.io/address/${contractAddress}`);

    // 6. 合约地址写入文件系统
    const addressFile = path.resolve(__dirname, '../address.json');
    fs.writeFileSync(addressFile, JSON.stringify(contractAddress));
    console.log('地址写入成功：', addressFile);

    process.exit();

})();