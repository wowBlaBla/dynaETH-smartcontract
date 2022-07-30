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
5. To verify the deployed contract, follow up the below step
	- input the valid etherscan api key in "hardhat.config.js" file.
	- run either of below 2 commands on terminal (for rinkeby or mainnet)
		npx hardhat verify --netowrk rinkeby DEPLOYED_CONTRACT_ADDRESS
		npx hardhat verify --netowrk mainnet DEPLOYED_CONTRACT_ADDRESS
