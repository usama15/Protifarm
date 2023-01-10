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
import { Footer } from "../../components/Footer/Footer";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
    fontWeight: "bold",
  },
});

function SearchVehicles() {
  const classes = useStyles();
  const [post, setPost] = React.useState([]);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    fb.firestore()
      .collection("verifications")
      .onSnapshot((snapshot) => {
        const newPost = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPost(newPost);
      });
  }, []);
  const data = post.sort((a, b) => (a.date < b.date ? 1 : -1));

  const filterData = data.filter((val) => {
    return val.chessisNumber == search;
  });

  return (
    <div>
      <div className={classes.main}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="standard-basic"
            label="Chessis NO"
            variant="standard"
            style={{ width: "70%" }}
            onChange={(text) => {
              setSearch(text.target.value);
            }}
          />
          <Button className="btn" color="primary" variant="contained">
            Search
          </Button>
        </div>

        {filterData.length > 0
          ? filterData.map((val) => (
              <TableContainer className={classes.tb} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        {val.date}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.type}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        Vehicles
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.tokenNumber}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        CHESSISNUMBER
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.chessisNumber}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        ENGINENUMBER
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.engineNumber}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            ))
          : data.map((val) => (
              <TableContainer className={classes.tb} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        {val.date}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.type}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        Vehicles
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.tokenNumber}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        CHESSISNUMBER
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.chessisNumber}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.cell} align="left">
                        ENGINENUMBER
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {val.engineNumber}
                      </TableCell>
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

export default SearchVehicles;
