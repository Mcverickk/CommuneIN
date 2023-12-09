import React from "react";
import '../styles/nft.css';
import NftPic from "./product/NftPicture";
import NftText from "./product/NftText";
import MintHook from "./mintHook";

const NftComponent = (props) => {
  const {handleMint, status} = MintHook();
  return (
    <div className="frame">
      <NftPic source={props.pic} />
      <NftText info={props.info} name={props.name} price={props.price} timeLeft={props.timeLeft}/>
      <button onClick={handleMint} disabled= {props.disabled} className="btn-grad" style={{
        marginTop:'10px'
      }}>Mint</button>
    </div>
  );
};

export default NftComponent;
