import React from "react";
import ClaimHook from "./claimHook";

function VotingCard(props) {
  const {handleClaim} = ClaimHook();
  return (
    <div className="frame">
      <h3 className="votingTitle font-bolder">{props.title}</h3>
      <div className="tag">{props.tag}</div>
      <p className="applyTime">{`Ends in: ${props.timeLeft}`}</p>
      <p className="descrition">
        {props.info}
      </p>
      <div className="center">
      <button disabled={props.disabled} onClick={handleClaim} className='btn-erc center' style={{
          marginTop:'30px'
        }}>Claim</button>
      </div>
    </div>
  );
}

export default VotingCard;
