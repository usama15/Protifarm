import React from 'react'
import "./Footer.css"

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
                        <table className="footer-table">
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter name" className="form-input" /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input type="email" placeholder="Enter email" className="form-input" /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Contact</label>
                                </td>
                                <td>
                                    <input type="text" placeholder="Enter contact" className="form-input" /><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Message</label>
                                </td>
                                <td>
                                    <textarea placeholder="Enter message" className="form-textarea"></textarea><br />
                                </td>
                            </tr>
                        </table>


                        <input type="submit" value="Submit" id="submit" className="form-input" />
                    </form>
                </div>
            </div>
        </div>
    )
}
