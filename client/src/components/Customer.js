import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class Customer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="textImg" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    );
  }
}

// class CustomerInfo extends Component {
//   render() {
//     const { name, birthday, gender, job } = this.props;
//     console.log("ytw ", this.props);

//     return (
//       <div>
//         <h2>{name}</h2>
//         <p>{birthday}</p>
//         <p>{gender}</p>
//         <p>{job}</p>
//       </div>
//     );
//   }
// }
// class CustomerProfile extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.image} alt="profile" />
//         <h2>
//           {this.props.name}
//           {this.props.id}
//         </h2>
//       </div>
//     );
//   }
// }
export default Customer;
