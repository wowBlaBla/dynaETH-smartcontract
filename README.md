# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Running STEP

1. Open "hardhat.config.js" file and input the deployer wallet private key to "PRIVATE_KEY" constant.
2. Open terminal on project root folder and run below commands
	- npm install
3. Deploy the dynaETH contract on rinkeby testnet
	- npx hardhat compile
	- npx hardhat run --network rinkeby scripts/deploy.js (for test)
4. After test successfully, deploy the dynaETH contract on mainnet
	- npx hardhat run --network mainnet scripts/deploy.js (for deployment)
