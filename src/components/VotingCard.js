import React from "react";

function VotingCard() {
  return (
    <div className="frame">
      <h3 className="votingTitle font-bolder">GMX Grant Program </h3>
      <div className="tag">W3 x</div>
      <p className="applyTime">APPLY: 1 NOV - 31 JAN</p>
      <p className="descrition">
        Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
      </p>
      <div className="center">
      <button className='btn-erc center' style={{
          marginTop:'30px'
        }}>APPLY</button>
      </div>
    </div>
  );
}

export default VotingCard;
