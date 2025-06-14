# Tether Contract API

A RESTful API service that interacts with the Tether (USDT) smart contract on the Ethereum blockchain. This API provides easy access to query important contract information, token balances, and allowances.

## Features

- Query Tether contract information (name, symbol, decimals)
- Get total token supply
- Check token balances for any address
- View contract owner
- Check token allowances between addresses
- Ethereum address validation
- Automatic unit conversion (wei to human-readable format)

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Access to an Ethereum node (via Infura, Alchemy, or local node)

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/pacheco94/API-Token>
cd api_token_tether
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
ETHEREUM_NODE_URL=your_ethereum_node_url
```

## Running the Application

Start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000` (or the port specified in your .env file)

## API Endpoints

All endpoints are prefixed with `/api`

### Contract Information
- `GET /name` - Get token name
- `GET /symbol` - Get token symbol
- `GET /decimals` - Get token decimals
- `GET /totalSupply` - Get total token supply
- `GET /owner` - Get contract owner address

### Token Operations
- `GET /balance/:address` - Get token balance for an address
- `GET /allowance/:owner/:spender` - Get allowance between two addresses

## Example Responses

### Get Token Balance
```json
{
    "balance": "1000.000000"
}
```

### Get Allowance
```json
{
    "allowance": "500.000000"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- 200: Successful request
- 400: Invalid request parameters
- 500: Server error

## Technologies Used

- Node.js
- Express.js
- Ethers.js
- CORS
- dotenv

## License

ISC

## Author

George Pacheco Lebeque
