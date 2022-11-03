# Upgradeable contract

This project comes with a upgradeable contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
env $(cat .env) npx hardhat test
env $(cat .env) REPORT_GAS=true npx hardhat test
env $(cat .env) npx hardhat node
env $(cat .env) npx hardhat run scripts/deploy.js --network goerli
env $(cat .env) npx hardhat run scripts/upgrade.js --network goerli

env $(cat .env) npx hardhat verify --network goerli <contract_address>
```