// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Box {
  uint public val;
  bool private initialized;

  function initialize(uint _val) external {
    require(!initialized, "Contract instance has already been initialized");
    initialized = true;
    val = _val;
  }
}