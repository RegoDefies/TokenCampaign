import Web3 from 'web3';
//const web3 = new Web3(window.web3.currentProvider); // provider provided automatically by metamask

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // We are in the browser and metamask is runnins
    web3 = new Web3(window.web3.currentProvider);

}else{
    // We are on the server OR user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/50ffb4aa2d03422da9dc47e7205e2397'
    );
    web3 = new Web3(provider);

}


export default web3;