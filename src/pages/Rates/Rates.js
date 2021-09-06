import React from 'react';
import {Intro} from "../../components/Intro/Intro";
import {RatesCard} from "../../components/RatesCard/RatesCard";

export const Rates = ({navOpen}) => {
    return (
        <div>
            <h1 style={{"textAlign":"center","color":"green"}}>Daily Prices of Chicken of last 6 days</h1>
            <div className="row">
                <div className="column">
                    <RatesCard date="4th September 2021" />
                </div>
                <div className="column">
                    <RatesCard date="3rd September 2021" />
                </div>
                <div className="column">
                    <RatesCard date="2nd September 2021" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <RatesCard date="1st September 2021" />
                </div>
                <div className="column">
                    <RatesCard date="31st August 2021" />
                </div>
                <div className="column">
                    <RatesCard date="30th August 2021" />
                </div>
            </div>
        </div>
    )
}