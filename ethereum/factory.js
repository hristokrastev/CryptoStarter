import web3 from './web3';
import CampaignFactory from './build/CompaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3BdfeC74eCAee7e464eC533f8C77Dabd1C9bf3E1'
);

export default instance;