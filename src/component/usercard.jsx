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
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
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
    const { title } = this.state;
    const { first_Name } = this.state;
    const { last_Name } = this.state;
    const { pic } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
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
