/**
 * @ validateAddress.js
 * @description Middleware to validate Ethereum addresses
 */

const { ethers } = require('ethers');

const validateAddress = (req, res, next) => {
    const { address, owner, spender } = req.params;
    // Case 1: Check if the address is a valid Ethereum address one address case
    if ( address && !ethers.isAddress(address)) {
        return res.status(400).json({ error: 'Invalid Ethereum address '});
    }

    // Case 2: Check if the owner and spender are valid Ethereum addresses
    if(owner && !ethers.isAddress(owner) || spender && !ethers.isAddress(spender)) {
        return res.status(400).json({ error: 'Invalid Ethereum address for owner or spender' });
    }
    next();
};

module.exports = validateAddress;