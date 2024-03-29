import React from 'react'
import { Link } from 'react-router-dom'
import { Intro } from '../../components/Intro/Intro.js'
import { Footer } from '../../components/Footer/Footer';
import  RatesCard  from '../../components/RatesCard/RatesCard.js'
import "./Home.css"

export const Home = () => {
    return (
        <div className="home">
            <h1>Daily Prices of Chickens</h1>
            <div className="row">
                <div className="column">
                    <RatesCard />
                </div>
                {/*<div className="column">*/}
                {/*    <RatesCard date="2nd August 2021" />*/}
                {/*</div>*/}
                {/*<div className="column">*/}
                {/*    <RatesCard date="1st August 2021" />*/}
                {/*</div>*/}
            </div>
            <p style={{color:"#cc0000" }}>For more previous rates,<Link to="/rates" ><span style={{color:"#cc0000" }}>Click here</span></Link></p>
      <Footer />

        </div>
    )
}
