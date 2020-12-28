const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CompaignFactory.json');



const provider = new HDWalletProvider(
   'auction current high mechanic attack female desert wheel grace blame achieve ceiling',
   'https://rinkeby.infura.io/v3/9c327ed633ac475fac8ab2bb8f65e266'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
     .deploy({ data: '0x' + compiledFactory.bytecode }) // add 0x bytecode
     .send({gas: '1000000', from: accounts[0]});

     console.log('Contract deployed to', result.options.address);
}
deploy();

//0x3BdfeC74eCAee7e464eC533f8C77Dabd1C9bf3E1