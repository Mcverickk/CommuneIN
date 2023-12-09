import React from "react";

function VotingCard(props) {
  return (
    <div className="frame">
      <h3 className="votingTitle font-bolder">{props.title}</h3>
      <div className="tag">{props.tag}</div>
      <p className="applyTime">{`Ends in: ${props.timeLeft}`}</p>
      <p className="descrition">
        {props.info}
      </p>
      <div className="center">
      <button className='btn-erc center' style={{
          marginTop:'30px'
        }}>Claim</button>
      </div>
    </div>
  );
}

export default VotingCard;
