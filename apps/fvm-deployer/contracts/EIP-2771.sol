import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract EIP2771 is BaseRelayRecipient {

    /** 
     * Set the trustedForwarder address either in constructor or 
     * in other init function in your contract
     */ 
    constructor(address _trustedForwarder) public {
        trustedForwarder = _trustedForwarder;
    }
    
    ...
    
    /**
     * OPTIONAL
     * You should add one setTrustedForwarder(address _trustedForwarder)
     * method with onlyOwner modifier so you can change the trusted
     * forwarder address to switch to some other meta transaction protocol
     * if any better protocol comes tomorrow or current one is upgraded.
     */
    
    /** 
     * Override this function.
     * This version is to keep track of BaseRelayRecipient you are using
     * in your contract. 
     */
    function versionRecipient() external view override returns (string memory) {
        return "1";
    }
}
