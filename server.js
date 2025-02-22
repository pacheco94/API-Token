const express = require('express');
const cors = require('cors');
const { provider, contract } = require('./ether.js');
const { ethers } = require('ethers');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||5000;

app.get('/', (req, res) => {
    res.send('API running');
});

// Obteniendo el nombre del Token
app.get('/name', async (req, res)=> {
    try{
        const name = await contract.name();
        res.json({ name });
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
    
});

//Obteniendo el symbol del Token
app.get('/symbol', async (req, res) => {
    try{
        const symbol = await contract.symbol();
        res.json({ symbol });
    }catch(error) {
        res.status(500).json({ error: error.message});
    }
});

//Obteniendo los decimales del contrato
app.get('/decimals', async (req, res)=> {
    try{
        const decimals = await contract.decimals();

        res.json({ decimals: Number(decimals) });
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
});

//Obteniendo el totalSupply del Token
app.get('/totalSupply', async (req, res)=> {
    try {
        const decimals = await contract.decimals();
        const totalSupplyInWei = await contract.totalSupply();

        const totalSupply = ethers.formatUnits(totalSupplyInWei, decimals);

        res.json({ totalSupply });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
});

//Obtener el balance de una cuenta
app.get('/balance/:address', async (req, res) => {
    try {
        const { address } = req.params;

        if(!ethers.isAddress(address)) {
            return res.status(400).json({error: "No valid address"});
        }
    
        const decimals = await contract.decimals();
        const balanceInWei = await contract.balanceOf(address);
        const balance = ethers.formatUnits(balanceInWei,decimals);

        res.json({ address, balance});

    }catch(error){
        res.status(500).json({ error: error.message });
    }
   
});

//Obteniendo asignacion alowance de un usuario a otro
app.get('/allowance/:owner/:spender', async (req, res)=> {
    try{
        const { owner, spender} = req.params;

        if(!ethers.isAddress(owner) || !ethers.isAddress(spender)){
            return res.status(400).json({ error: 'Address not valid!'});
        }

        const allowance = await contract.allowance( owner, spender );

        res.json({ owner, spender, allowance: allowance.toString() });
    }catch(error) {
        res.status(500).json({error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});