import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import fb from "../../config/firebase";


const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
    main:{
      width:'62%',
        marginLeft:'15%',


    },

    tb:{
      marginTop:'5%',
        marginBottom:'5%',
    },

});


function RatesCard(props) {
          const classes = useStyles();
          const [post , setPost] = React.useState([])
     React.useEffect(() => {
      fb.firestore().collection('rates').onSnapshot((snapshot) => {
          const newPost = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }))
          setPost(newPost)

      })
     },[])
    const data = post.sort((a, b) => (a.date < b.date) ? 1 : -1);
          const dt = new Date().getDate()
    console.log(dt)
    return (
        <div className={classes.main}>
            {data.map ((data) => (
                data.dt == dt?
            <TableContainer className={classes.tb} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          <TableHead>
          <TableRow>
            <TableCell align='left' >{data.date}</TableCell>
              <TableCell align='center'/>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell align="left">City Name</TableCell>
            <TableCell align="right">Rates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align='left'>
                    KARACHI
                </TableCell>
                <TableCell align='right'>{data.karachi}</TableCell>
            </TableRow>
              <TableRow>
                <TableCell align='left'>
                    VINDER
                </TableCell>
                <TableCell align='right'>{data.vinder}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>
                    SUJAWAL
                </TableCell>
                <TableCell align='right'>{data.sujawal}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    GOLARCHI
                </TableCell>
                <TableCell align='right'>{data.golarchi}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    HYDERABAD
                </TableCell>
                <TableCell align='right'>{data.hyderabad}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    BADIN
                </TableCell>
                <TableCell align='right'>{data.badin}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    T.ALLHAYAR
                </TableCell>
                <TableCell align='right'>{data.tallhayar}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    M. P. KHAS
                </TableCell>
                <TableCell align='right'>{data.mpkhas}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    NAWAB SHAH
                </TableCell>
                <TableCell align='right'>{data.nawabshah}</TableCell>
              </TableRow>
             <TableRow>
                <TableCell align='left'>
                    S. P. CHAKAR
                </TableCell>
                <TableCell align='right'>{data.spchakar}</TableCell>
              </TableRow>
            <TableRow>
                <TableCell align='left'>
                  DIGRI
                </TableCell>
                <TableCell align='right'>{data.digri}</TableCell>
              </TableRow>
            <TableRow>
                <TableCell align='left'>
                    KHIPRO
                </TableCell>
                <TableCell align='right'>{data.khipro}</TableCell>
              </TableRow>
            <TableRow>
                <TableCell align='left'>
                    SAMARO
                </TableCell>
                <TableCell align='right'>{data.samaro}</TableCell>
              </TableRow>
            <TableRow>
                <TableCell align='left'>
                    KUNRI
                </TableCell>
                <TableCell align='right'>{data.kunri}</TableCell>
              </TableRow>

        </TableBody>
      </Table>
    </TableContainer>:null
            ))}
        </div>
    );
}

export default RatesCard;