import React from 'react'
import "./RatesCard.css"
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
export const RatesCard = ({date}) => {
    return (
        <div className="card">
            <h3>Date: {date}</h3>
            <table border="1" id="rates-table">
                <tr>
                    <th>City</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Karachi</td>
                    <td>Rs 180</td>
                </tr>
                <tr>
                    <td>Vindar</td>
                    <td>180 Rs</td>
                </tr>
                <tr>
                    <td>Sujawal</td>
                    <td>178 Rs</td>
                </tr>
                <tr>
                    <td>Golarchi</td>
                    <td>177 Rs</td>
                </tr>
                <tr>
                    <td>Hyderabad</td>
                    <td>178 Rs</td>
                </tr>
                <tr>
                    <td>Tando Allahyar</td>
                    <td>177 Rs</td>
                </tr>
                <tr>
                    <td>Mirpur Khas</td>
                    <td>176 Rs</td>
                </tr>
                <tr>
                    <td>Nawab Shah</td>
                    <td>176 Rs</td>
                </tr>
                <tr>
                    <td>Sanghar</td>
                    <td>176 Rs</td>
                </tr>
                <tr>
                    <td>S.P. Chakkar</td>
                    <td>176 Rs</td>
                </tr>
                <tr>
                    <td>Digri</td>
                    <td>175 Rs</td>
                </tr>
                <tr>
                    <td>Khipro</td>
                    <td>174 Rs</td>
                </tr>
                <tr>
                    <td>Samaro</td>
                    <td>174 Rs</td>
                </tr>
                <tr>
                    <td>Kunri</td>
                    <td>174 Rs</td>
                </tr>
            </table>
        </div>
    )
}
