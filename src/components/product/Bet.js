import React from "react";
import Price from "./Price";
import Time from "./Time";

const Bet = (props)=> {
    return (
        <div className="bet">
            <Price content={props.price} />
            <Time content={props.timeLeft} />
        </div>
    );
}

export default Bet;