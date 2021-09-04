import React from 'react'
import { Intro } from "../../components/Intro/Intro";
import "./Contact.css"

export const Contact = ({ navOpen }) => {
    return (
        <div>
            <Intro navOpen={navOpen} />
            <div className="form-wrapper">
                <div id="wrapper">

                    <div id="contact_form_div">
                        <p id="contact_label">CONTACT  FORM</p>
                        <form>
                            <p><input type="text" placeholder="Enter Name" /></p>
                            <p><input type="text" placeholder="Enter Email" /></p>
                            <p><input type="text" placeholder="Enter Contact No" /></p>
                            <p><textarea placeholder="Enter Message"></textarea></p>
                            <p><input type="submit" value="SUBMIT" /></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
