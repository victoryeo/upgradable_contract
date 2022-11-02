// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract BoxV2 {
  uint public val;

  function inc() external {
    val += 1;
  }
}