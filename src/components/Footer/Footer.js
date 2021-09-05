import React from 'react'
import "./Footer.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="row-footer">
                <div className="column-footer">
                    <h1>Thank You for visiting us</h1>
                    <h3>For more details Visit our<br />social media platforms</h3>
                   <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fas fa-address-card"></i></a>
                    <a href=""><i className="fas fa-phone"></i></a>
                </div>
                <div className="column-footer">
                    <h1>Contact Us</h1>
                    <form>
                        <table border='0px' className="footer-table">
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <TextField className="form-input" id="outlined-basic" label="Name" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <TextField className="form-input" id="outlined-basic" label="Email" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Contact</label>
                                </td>
                                <td>
                                    <TextField className="form-input" id="outlined-basic" label="Contact" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Message</label>
                                </td>
                                <td>
                                    <TextField className="form-input" id="outlined-basic" label="Message" variant="outlined" />
                                </td>
                            </tr>
                        </table>
                         <Button className='btn' color="primary"  variant="contained">Submit</Button>
                        {/*<input type="submit" value="Submit" id="submit" className="form-input" />*/}
                    </form>
                </div>
            </div>
        </div>
    )
}
