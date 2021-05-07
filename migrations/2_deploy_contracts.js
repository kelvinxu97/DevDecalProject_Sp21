//var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var MerchToken = artifacts.require("./MerchToken.sol");

module.exports = function(deployer) {
  //eployer.deploy(SimpleStorage);
  deployer.deploy(MerchToken);
};
