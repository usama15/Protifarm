import React from 'react'
import "./RatesCard.css"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

function createData(city, rate) {
    return { city, rate };
}

const rows = [
    createData('Karachi', 180),
    createData('Vindar', 180),
    createData('Sajawal', 178),
    createData('Golarchi', 177),
    createData('Hyderabad', 178),
    createData('Tando Allahyar', 177),
    createData('Mirpur Khas', 176),
    createData('Nawab Shah', 176),
    createData('Sanghar', 176),
    createData('S.P. Chakkar', 176),
    createData('Digri', 175),
    createData('Khipro', 174),
    createData('Samaro', 174),
    createData('Kunri', 174),

];

export const RatesCard = ({ date }) => {
    const classes = useStyles();
    return (
        <div className="card">
            <h3>Date: {date}</h3>
            <TableContainer component={Paper} style={{"marginTop": "10px"}}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell align="right">Rates(Rs)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.city}
                                </TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
