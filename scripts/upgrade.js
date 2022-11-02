const hre = require("hardhat");

// transparent upgradeable proxy contract address
const PROXY = "0xFBD....";

async function main() {
  const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
  await hre.upgrades.upgradeProxy(PROXY, BoxV2);
  console.log("Box upgraded");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
