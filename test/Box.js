const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Box", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Box = await ethers.getContractFactory("Box");
    const box = await Box.deploy();

    return { box, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right box", async function () {
      const { box } = await loadFixture(deployContract);
      expect(box).to.be.an('object');
    });

    it("Should set the right owner", async function () {
      const { box, owner } = await loadFixture(deployContract);

      expect(await box.owner()).to.equal(owner.address);
    });
  });
});
