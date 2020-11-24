import React, { Component } from "react";

class Customer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <div>
        <CustomerInfo
          name={name}
          birthday={birthday}
          gender={gender}
          job={job}
        />
        <CustomerProfile name={name} image={image} id={id} />
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    const { name, birthday, gender, job } = this.props;
    console.log("ytw ", this.props);

    return (
      <div>
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p>{gender}</p>
        <p>{job}</p>
      </div>
    );
  }
}
class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}
          {this.props.id}
        </h2>
      </div>
    );
  }
}
export default Customer;
