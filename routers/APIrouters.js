/**
 * @file routers.js
 * @description This file contains the router for the Tether contract from etherscan.
 */

const express = require('express');
const router = express.Router();
const { getName, getSymbol, getDecimals, getTotalSupply, getOwner, getAllowance, getAddressBalance } = require('../controllers/contractControllers');

const validateAddress = require('../middlewares/validateAddress');

// Routes
router.get('/name', getName);
router.get('/symbol', getSymbol);
router.get('/decimals', getDecimals);
router.get('/totalSupply', getTotalSupply);
router.get('/owner', getOwner);
router.get('/balance/:address',validateAddress, getAddressBalance);
router.get('/allowance/:owner/:spender', validateAddress, getAllowance);

module.exports = router;
