import React from 'react';
import "./Intro.css";
import image from "../../assets/slide-1.jpg"
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Intro = () => {
    return (
        <div className='introContainer' style={{"marginTop":"77px"}}>
            <img src={image} alt="Snow" style={{width:"100%"}} className='img' />
            <div class="centered">
                <h1>Welcome to Sindh Balochistan<br />Wholesaler Poultry Association</h1>
                <Button className='button' variant="outlined"><Link to="/rates"><span>Check Rates</span></Link></Button>
                <Button className='button' variant="outlined"><Link to="/contact"><span>Contact</span></Link></Button>
            </div>
        </div>
    )
}
