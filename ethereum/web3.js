import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);

} else {
    //we are not in the browser or the user is not running metamask

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/9c327ed633ac475fac8ab2bb8f65e266'
    );
    web3 = new Web3(provider);
}

export default web3;