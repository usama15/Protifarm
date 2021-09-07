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
    createData('Karachi', 214),
    createData('Vindar', 214),
    createData('Sajawal', 214),
    createData('Golarchi', 211),
    createData('Hyderabad', 210),
    createData('Badin', 209),
    createData('T.ALLHAYAR', 209),
    createData('M. P. KHAS.', 210),
    createData('NAWAB SHAH ', 210),
    createData('SANGHAR.', 210),
    createData('S. P. CHAKAR ', 210),
    createData('Digri', 209),
    createData('Khipro', 208),
    createData('Samaro', 208),
    createData('Kunri', 208),

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
