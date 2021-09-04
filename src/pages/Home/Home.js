import React from 'react'
import { Link } from 'react-router-dom'
import { Intro } from '../../components/Intro/Intro.js'
import { RatesCard } from '../../components/RatesCard/RatesCard.js'
import "./Home.css"

export const Home = ({ navOpen }) => {
    return (
        <div>
            <Intro navOpen={navOpen} />
            <h1>Daily Prices of Chickens</h1>
            <div className="row">
                <div className="column">
                    <RatesCard date="3rd August 2021" />
                </div>
                <div className="column">
                    <RatesCard date="2nd August 2021" />
                </div>
                <div className="column">
                    <RatesCard date="1st August 2021" />
                </div>
            </div>
            <p>For more previous rates,<Link to="/rates"><span>Click here</span></Link></p>
        </div>
    )
}
