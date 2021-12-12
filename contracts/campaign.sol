pragma solidity ^0.4.17;

contract Campaign{
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvals_counter;
        mapping(address => bool) voted_approvals; // Reference-types do not require initialization
    }

    /* ========================================================================
       Public Variables
       ========================================================================
    */

    address public gManager;    
    Request[] public gRequests;
    uint public gMinContrib; // Minimum contribution
    mapping(address=> bool) public gApprovers; //address[] public gApprovers;
    uint public gApproversCounter;

   /* ========================================================================
      Modifiers
      ========================================================================
    */

    modifier RestrictedToOwner(){
        require(msg.sender == gManager);
        _;
    }

   /* ========================================================================
      Methods
      ========================================================================
    */

    // Constructor
    function Campaign(uint pMinContrib) public {
        gManager = msg.sender;
        gMinContrib = pMinContrib;
    }

    function Contribute() public payable{
        require (msg.value > gMinContrib);
        gApprovers[msg.sender] = true; //gApprovers.push(msg.sender);
        gApproversCounter++;
    }

    function CreateRequest(string pDescription, uint pValue, address pRecipient) public RestrictedToOwner{
        Request memory newRequest = Request({
            description : pDescription,
            value : pValue,
            recipient : pRecipient,
            complete : false,
            approvals_counter : 0
        });

        gRequests.push(newRequest);

    }

    function ApproveRequest(uint pRequestIndex) public{
        Request storage  request = gRequests[pRequestIndex];
        require(gApprovers[msg.sender]);
        require(!request.voted_approvals[msg.sender]);

        request.voted_approvals[msg.sender] = true;
        request.approvals_counter++;

    }

    function FinalizeRequesst(uint pRequestIndex) public RestrictedToOwner{
        Request storage request = gRequests[pRequestIndex];
        require(request.approvals_counter > (gApproversCounter / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}

