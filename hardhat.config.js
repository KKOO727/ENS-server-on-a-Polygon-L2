require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/nXy5tz9GoopS61a4kqmLef0Vnxxr_JKc",
      accounts: ["6647dc6abfaaef33f37806eec095445ce1521c8132abd63e6aa054e67d96916c"],
		}
  }
};