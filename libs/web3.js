import Web3 from 'web3';
import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();


let web3;
// // 浏览器环境且已经安装了 Metamask
// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   web3 = new Web3(window.web3.currentProvider);
//   // window.alert()
//   // const account = web3.eth.getAccounts();
//   // window.alert(String(account[0]));

// // 服务器环境或者没有安装 Metamask
// } else {
//   // web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/778db01084734907b9432e8e4621420c'));
//   // window.alert('web3 address 2: ', publicRuntimeConfig.infuraUrl);
//   web3 = new Web3(new Web3.providers.HttpProvider(publicRuntimeConfig.infuraUrl));
//   console.log(web3)
// }

// export default web3;



// var web3Provider;
// if (window.ethereum) {
//   web3Provider = window.ethereum;
//   try {
//     // 请求用户授权
//     window.ethereum.enable();
//   } catch (error) {
//     // 用户不授权时
//     console.error("User denied account access")
//   }
// } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
//   web3Provider = window.web3.currentProvider;
// } else {
//   web3Provider = new Web3.providers.HttpProvider(publicRuntimeConfig.infuraUrl);
// }
// web3 = ;//web3js就是你需要的web3实例

// web3.eth.getAccounts(function (error, result) {
//   if (!error)
//     console.log(result)//授权成功后result能正常获取到账号了
// });


    // const web3 = new Web3(window.web3.currentProvider);
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      // 请求用户授权
      web3 = new Web3(window.ethereum);
      window.ethereum.enable(function () {
        // web3 = window.web3;
        web3.eth.getAccounts((error, accounts) => {
          web3.eth.defaultAccount = accounts[0];
          console.log(accounts)
        })
      })

    } else if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
      web3.eth.defaultAccount = web3.eth.accounts[0];
      console.log(web3.eth.defaultAccount);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/778db01084734907b9432e8e4621420c"));
    }



export default web3;
