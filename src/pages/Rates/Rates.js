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
import { Footer } from '../../components/Footer/Footer';
import RemoveIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
    tableLayout:"fixed",
    whiteSpace:"nowrap",
   
  },
  main: {
    width: "100%",
    marginLeft: "15%",
    ['@media (min-width:376px)']: { // eslint-disable-line no-useless-computed-key
      width: '370px',
      marginLeft: "2%"
    },
    ['@media (min-width:485px)']: { // eslint-disable-line no-useless-computed-key
      width: '75%',
      marginLeft: "12%"
    },
   
  },

  tb: {
    marginTop: "5%",
    marginBottom: "5%",
    
   
  },
  cell:{
    fontWeight:'bold',
    flex:2,
  },
  
});

function Rates() {
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

  return (
    <div >
    <div className={classes.main}>
      {data.map((data) => (
        
        <TableContainer className={classes.tb} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            
            <TableHead>
              <TableRow style={{backgroundColor: "#cc0000"}}>
                <TableCell className={classes.cell} align="left" style={{color:"#f2f2f2"}}>City Name &nbsp;  | &nbsp; Date: '{data.date}'' </TableCell>

                <TableCell className={classes.cell} align="right" style={{color:"#f2f2f2"}}> | Confirm Rates</TableCell>
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
                <TableCell  className={classes.cell}align="left">SUJAWAL</TableCell>
                <TableCell  className={classes.cell}align="right">{data.sujawal}</TableCell>
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
      ))}
      
    </div>
    <Footer />
    </div>
  );
}

export default Rates;
