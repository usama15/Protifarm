import React from 'react';
import "./Intro.css";
import image from "../../assets/slide-1.jpg"
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Intro = ({navOpen}) => {
    console.log(navOpen);
    return (
        <div className={`introContainer ${navOpen ? 'navOpen':'introContainer'}`}>
            <img src={image} alt="Snow" style={{width:"100%"}} className='img' />
            <div class="centered">
                <h2>Welcome to Sindh Balochistan<br />Wholesaler Association</h2>
                <Button className='button' variant="outlined"><Link to="/rates"><span>Check Rates</span></Link></Button>
                <Button className='button' variant="outlined"><Link to="/contact"><span>Contact</span></Link></Button>
            </div>
        </div>
    )
}
