import React from "react";
import ArtPic from "./ArtPic";

const NftPic = (props) => {
    return (
        <div className="art">
            <ArtPic source={props.source} />
        </div>
    );
}

export default NftPic;