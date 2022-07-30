require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

module.exports = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/pX3By9XpcfFmTH28ezj1wNRMJOaHnBU_`,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/RzncSGxfAEqBXROU3FZ2qvZufllibIMQ`,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: "6396JCSVSE19CEK54UTEF7XPTQUHMIKEHA",
  }
};
