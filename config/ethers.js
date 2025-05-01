const ethers = require('ethers');
require('dotenv').config();
const contractABI = require('./contractABI.json');

const { INFURA_API_KEY, CONTRACT_ADDRESS} = process.env;

//provider configuration
const provider = new ethers.JsonRpcProvider(INFURA_API_KEY);
const contractAddress = CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, provider); 

module.exports = {
    contract,
    provider,
    ethers
}