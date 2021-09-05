import React from 'react'
import { Intro } from "../../components/Intro/Intro";
import "./Contact.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Contact = ({ navOpen }) => {
    return (
        <div>
            <Intro navOpen={navOpen} />
            <div className="form-wrapper">
                <div id="wrapper">

                    <div id="contact_form_div">
                        <p id="contact_label">CONTACT  FORM</p>
                        <form>

                            <TextField className='input' id="outlined-basic" label="Enter Email" variant="outlined" />
                            <TextField className='input' id="outlined-basic" label="Contact NO" variant="outlined" />
                            <TextField className='input' id="outlined-basic" label="Message" variant="outlined" />
                            <Button className='btn' color="primary"  variant="contained">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
