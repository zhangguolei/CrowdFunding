// 往 ProjectList 合约实例�?写入示例数据
const Web3 = require('web3');
const config = require('config');
const HDWalletProvider = require('truffle-hdwallet-provider');
const ProjectList = require('../compiled/ProjectList.json');
const address = require('../address.json');

const web3 = new Web3(new HDWalletProvider(
    config.get('hdwallet'),
    config.get('infuraUrl'),
));
const contract = new web3.eth.Contract(JSON.parse(ProjectList.interface), address);

(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  const projects = [
    {
      description: 'Uniswap',
      minInvest: web3.utils.toWei('0.1', 'ether'),
      maxInvest: web3.utils.toWei('0.5', 'ether'),
      goal: web3.utils.toWei('10', 'ether'),
    },
    {
      description: 'Polkadot',
      minInvest: web3.utils.toWei('0.2', 'ether'),
      maxInvest: web3.utils.toWei('1', 'ether'),
      goal: web3.utils.toWei('30', 'ether'),
    },
  ];
  console.log(projects);

  const owner = accounts[0];
  const results = await Promise.all(projects.map(x =>
    contract
      .methods.createProject(x.description, x.minInvest, x.maxInvest, x.goal)
      .send({ from: owner, gas: '5000000' })
    )
  );

  console.log(results);
})(); 




