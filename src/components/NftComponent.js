import React from "react";
import '../styles/nft.css';
import NftPic from "./product/NftPicture";
import NftText from "./product/NftText";

const NftComponent = () => {
  return (
    <div className="frame">
      <NftPic source="./images/image-equilibrium.jpg" />
      <NftText />
      <button className="btn-grad" style={{
        marginTop:'10px'
      }} >Mint Chirag</button>
    </div>
  );
};

export default NftComponent;
