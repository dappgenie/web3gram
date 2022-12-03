// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract Web3Gram is BaseRelayRecipient {

     address owner;

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }


    /** 
     * Set the trustedForwarder address either in constructor or 
     * in other init function in your contract
     */ 
    constructor(address _trustedForwarder) public {
        owner = msg.sender;
        trustedForwarder = _trustedForwarder;
    }
    
    
    /** 
     * Override this function.
     * This version is to keep track of BaseRelayRecipient you are using
     * in your contract. 
     */
    function versionRecipient() external view override returns (string memory) {
        return "1";
    }

   /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        owner = newOwner;
    }
}
