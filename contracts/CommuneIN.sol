// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.0/access/Ownable.sol";

contract CommuneIn is ERC721 {
    address owner;
    uint public counter;
    constructor()
        ERC721("CommuneIn", "CIN")
    {
      owner = msg.sender;
    }

    function safeMint(uint amount) public payable  {
        require(msg.value == (0.01 ether * amount),"Mint amount is 0.01 ether");
        uint c = counter;
        for(uint i = 0; i < amount; i++){
            _safeMint(msg.sender, c);
            c++;
        }
        counter = c;
    }
    function claim() public payable {
         require(msg.sender == owner,"Not Ownner");
        (bool sent,) = msg.sender.call{value: 0.01 ether}("");
    }
}
