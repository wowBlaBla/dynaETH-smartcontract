require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = "e19ad042801106335e2d78296dce1c2a92d60212750576e092bd6a1416be19d9";

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
    apiKey: "",
  }
};
