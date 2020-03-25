import React, { Component } from "react";

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
        userData: data.value
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
      <div>
        <p>Welcome unwilling test subject</p>
        <p> {userData}</p>
      </div>
    );
  }
}

export default UserCard;
