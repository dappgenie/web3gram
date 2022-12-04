// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";
import "./types/MarketTypes.sol";

contract Web3Gram is BaseRelayRecipient {

     mapping(uint64 => MarketTypes.MockDeal) deals;
     address owner;
     uint64 dealNo;
    mapping(address => uint64[]) userPosts;
    mapping(address => address[]) userFollowers;
    mapping(address => address[]) userFollowing;
     

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


    function addUserPost(string memory cid) public {

        userPosts[_msgSender()].push(dealNo);
        addMockDeals(cid);
    }

    function getUserPosts(address user) public view returns(uint64[] memory) {

        return userPosts[user];
    }

    function followUser(address user) public {

        userFollowing[_msgSender()].push(user);
        userFollowers[user].push(_msgSender());
    }

    function getUserFollowers(address user) public view returns(address[] memory) {

        return userFollowers[user];
    }
    function getUserFollowings(address user) public view returns(address[] memory) {

        return userFollowing[user];
    }



    function addMockDeals(string memory cid) internal virtual{
        MarketTypes.MockDeal memory deal;
        deal.id = dealNo;
        deal
            .cid = cid;
        deal.size = 8388608;
        deal.verified = false;
        deal.client = "t01109";
        deal.provider = "t01113";
        deal.label = "mAXCg5AIg8YBXbFjtdBy1iZjpDYAwRSt0elGLF5GvTqulEii1VcM";
        deal.start = 25245;
        deal.end = 545150;
        deal.price_per_epoch = 1100000000000;
        deal.provider_collateral = 0;
        deal.client_collateral = 0;
        deal.activated = 1;
        deal.terminated = 0;

        deals[deal.id] = deal;
        dealNo++;
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
