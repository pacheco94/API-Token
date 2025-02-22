const  { ethers  } = require('ethers');
require('dotenv').config();

const contractABI = require('./abi.json');

// Configuracio del proveedor
const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, provider);

module.exports = { provider, contract};
