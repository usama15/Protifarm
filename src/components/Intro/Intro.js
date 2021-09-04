import React from 'react';
import "./Intro.css";
import image from "../../assets/slide-1.jpg"
import { Link } from 'react-router-dom';

export const Intro = ({navOpen}) => {
    console.log(navOpen);
    return (
        <div className={`introContainer ${navOpen ? 'navOpen':'introContainer'}`}>
            <img src={image} alt="Snow" style={{"width":"100%"}} />
            <div class="centered">
                <h2>Welcome to Sindh Balchistan<br />Wholesaler Association</h2>
                <button><Link to="/rates"><span>Check Rates</span></Link></button>
                <button><Link to="/contact"><span>Contact</span></Link></button>
            </div>
        </div>
    )
}
