import React, { Component } from "react";
import "./usercard.css";

class UserCard extends Component {
  state = {
    userData: "Getting user card"
  };
  async componentDidMount() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=1");
      let data = await response.json();
      console.log("data is ", data);

      this.setState({
        userData: data.results.firstname
      });
    } catch (error) {
      this.setState({
        userData: error.message
      });
    }
  }
  render() {
    let { userData } = this.state;
    return (
      <div className="card">
        <p>Welcome unwilling test subject</p>
        <p> `{userData}`</p>
      </div>
    );
  }
}

export default UserCard;
