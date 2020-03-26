import React, { Component } from "react";
import "./usercard.css";

class UserCard extends Component {
  state = {
    title: "title processing",
    first_Name: "First Name processing",
    last_Name: "Last Name",
    pic: "pic",
    email: "email",
    phone: "phone"
  };
  async componentDidMount() {
    try {
      let response = await fetch(`https://randomuser.me/api/?results=1`);
      let data = await response.json();
      this.setState({
        title: data.results[0].name.t,
        first_Name: data.results[0].name.f,
        last_Name: data.results[0].name.l,
        pic: data.results[0].picture.large,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  render() {
    let { title } = this.state;
    let { first_Name } = this.state;
    let { last_Name } = this.state;
    let { pic } = this.state;
    let { email } = this.state;
    let { phone } = this.state;
    return (
      <div>
        <div>
          <p> "Unwilling test Subject" </p>
          <img src={pic} alt="pic"></img>
          <p>{title}</p>
          <p>{first_Name}</p>
          <p>{last_Name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
