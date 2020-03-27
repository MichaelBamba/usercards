import React, { Component } from "react";
import PropCard from "./component/propcard";
import PropCardList from "./component/propcardlist";
import "./App.css";
class App extends Component {
  state = {
    subjectData: [],
    title: "Unwilling Test Subject"
  };

  subjectData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=6");
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newSubjectData = await this.subjectData();

    this.setState({
      subjectData: newSubjectData
    });
  };

  async componentDidMount() {
    const subjectData = await this.subjectData();

    this.setState({
      subjectData: subjectData
    });
  }

  render() {
    const { title, subjectData } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={this.handleClick}>Load New People</button>
        <PropCardList subjectData={subjectData} />
      </div>
    );
  }
}

export default App;
