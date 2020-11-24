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

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "양태욱",
    birthday: "940217",
    gender: "남자",
    job: "직장인",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "김보연",
    birthday: "950915",
    gender: "여자",
    job: "직장인",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "양수민",
    birthday: "960316",
    gender: "여자",
    job: "봄이 집사",
  },
];

class App extends React.Component {
  render() {
    const { classes } = this.props;
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
