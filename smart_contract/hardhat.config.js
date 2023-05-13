
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ddVE1Lzg3vrGlIiMW6whWXbuIWIRbRUx',
      accounts: ['45b5bcb7ab70e732dc48560f60c7f35f6afd726c47f7b22da26350407b27caf1']
    },
  },
};

require('@nomiclabs/hardhat-waffle');
