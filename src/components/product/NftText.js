import React from "react";
import Heading from "./Heading";
import Info from "./Info";
import Bet from "./Bet";

function NftText(props) {
  return (
    <div className="text">
      <Heading content={props.name} />
      <Info content={props.info} />
      <Bet price={props.price} timeLeft={props.timeLeft}/>
    </div>
  );
}

export default NftText;
