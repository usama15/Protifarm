import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import fb from "../../config/firebase";

const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
  main: {
    width: "62%",
    marginLeft: "15%",
  },

  tb: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  cell: {
    fontWeight: 'bold',
  },
});

function RatesCard(props) {
  const classes = useStyles();
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    fb.firestore()
      .collection("rates")
      .onSnapshot((snapshot) => {
        const newPost = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPost(newPost);
      });
  }, []);
  const data = post.sort((a, b) => (a.date < b.date ? 1 : -1));
  const dt = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).split(' ').join('-');
  console.log(dt);
  return (
    <div className={classes.main}>
      {data.map((data) =>
         (
          <TableContainer className={classes.tb} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell} align="left">{data.date}</TableCell>
                  <TableCell className={classes.cell} align="right">{data.type}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell} align="left">City Name</TableCell>
                  <TableCell className={classes.cell} align="right">Rates</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.cell} align="left">KARACHI</TableCell>
                  <TableCell className={classes.cell} align="right">{data.karachi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">VINDER</TableCell>
                  <TableCell className={classes.cell} align="right">{data.vinder}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">SUJAWAL</TableCell>
                  <TableCell className={classes.cell} align="right">{data.sujawal}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">GOLARCHI</TableCell>
                  <TableCell className={classes.cell} align="right">{data.golarchi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">HYDERABAD</TableCell>
                  <TableCell className={classes.cell} align="right">{data.hyderabad}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">BADIN</TableCell>
                  <TableCell className={classes.cell} align="right">{data.badin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">T.ALLHAYAR</TableCell>
                  <TableCell className={classes.cell} align="right">{data.tallhayar}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">M. P. KHAS</TableCell>
                  <TableCell className={classes.cell} align="right">{data.mpkhas}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">NAWAB SHAH</TableCell>
                  <TableCell className={classes.cell} align="right">{data.nawabshah}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">S. P. CHAKAR</TableCell>
                  <TableCell className={classes.cell} align="right">{data.spchakar}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">DIGRI</TableCell>
                  <TableCell className={classes.cell} align="right">{data.digri}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">KHIPRO</TableCell>
                  <TableCell className={classes.cell} align="right">{data.khipro}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">SAMARO</TableCell>
                  <TableCell className={classes.cell} align="right">{data.samaro}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell} align="left">KUNRI</TableCell>
                  <TableCell className={classes.cell} align="right">{data.kunri}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </div>
  );
}

export default RatesCard;
