/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks:{
      hardhat:{},
      sepolia:{
        url:'https://rpc.ankr.com/eth_sepolia/0723f76648bf85c48b10e08b01dc2b2de724282c1d0d6519fdde9d89715620f5',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }, 
  },
};
