// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable {
  uint public val;
  bool private initialized;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
      _disableInitializers();
  }

  function initialize(uint _val) external {
    require(!initialized, "Contract instance has already been initialized");
    initialized = true;
    val = _val;
  }
}