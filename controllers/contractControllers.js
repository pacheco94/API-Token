/**
 * @file contractControllers.js
 * @description This file contains the controller function of the Tether contract from etherscan.
 * @author George Pacheco Lebeque
 */

const { ethers, contract } = require('../config/ethers');

// Function to get contract token name
const getName = async (req, res) => {
    try {
        const name = await contract.name();
        res.json({ name });
    } catch (error) {
        console.error('Error getting contract name:', error);
        res.status(500).json({ error: error.message });
    }
};

// Function to get token symbol
const getSymbol = async (req, res) => {  
    try {
        const symbol = await contract.symbol();
        res.json({ symbol });
    } catch (error) {
        console.error('Error getting contract symbol:', error);
        res.status(500).json({ eror: error.message });
    }
};

// Function to get token decimals
const getDecimals = async (req, res) => {
    try {
        const decimals = await contract.decimals();
        res.json({ decimals: Number(decimals)});
    } catch (error) {
        console.error('Error getting contract decimals:', error);
        res.status(500).json({ error: error.message});
    }
};

// Function to get  token total supply
const getTotalSupply =  async (req, res) => {
    try {
        const decimals = await contract.decimals();
        const totalSupplyInWei = await contract.totalSupply();
        const totalSupply = ethers.formatUnits(totalSupplyInWei, decimals); // Convert to human-readable format
        
        res.json({ totalSupply });
    } catch (error) {
        console.error('Error getting contract total supply:', error);
        res.status(500).json({ error: error.message });
    }
};

// Function to get ownwer of the contract
const getOwner = async (req, res) => {
    try {
        const owner = await contract.owner();
        res.json({ owner });
    
    } catch (error) {
        console.error('Error getting contract owner:', error);
        res.status(500).json({ error: error.message });
    }
}

// Function to get token balance of an address
const getAddressBalance = async (req, res) => {
    const { address } = req.params;
    try { 
        const decimals = await contract.decimals();
        const balanceInWei = await contract.balanceOf(address); // Get balance in wei
        const balance = ethers.formatUnits(balanceInWei, decimals); // Convert to human-readable format

        res.json({ balance });
    } catch (error) {
        console.error('Error getting address balance:', error);
        res.status(500).json({ error: error.message });
    }
};

// Function to get allowance of an address
const getAllowance = async (req, res) => {
    const { owner, spender } = req.params;
    try {
        const allowance = await contract.allowance(owner, spender);
        const formattedAllowance = ethers.formatUnits(allowance.toString());
        if (formattedAllowance === '0.0') {
            return res.status(200).json({
                message: 'no allowance set between the owner and spender',
                allowance: formattedAllowance
            });
        }
        res.json({ allowance: formattedAllowance });
    } catch (error) {
        console.error('Error getting allowance:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getName,
    getSymbol,
    getDecimals,
    getTotalSupply,
    getOwner,
    getAddressBalance,
    getAllowance
};