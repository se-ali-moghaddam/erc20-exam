require("@nomicfoundation/hardhat-toolbox");

const { vars } = require('hardhat/config');

const ACC_PRIVATE_KEY = vars.get('ACC_PRIVATE_KEY');
const ETHERSCAN_API_KEY = vars.get('ETHERSCAN_API_KEY');
const INFURA_API_KEY = vars.get('INFURA_API_KEY');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  allowUnlimitedContractSize: true,
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACC_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
