import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    // overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((e) => {
        console.log(e);
      });
  }
  callApi = async () => {
    console.log("ytw call APi?");
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    const { customers } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((val) => {
              return (
                <Customer
                  key={val.id}
                  id={val.id}
                  image={val.image}
                  name={val.name}
                  birthday={val.birthday}
                  gender={val.gender}
                  job={val.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
