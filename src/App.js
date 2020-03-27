import React, { Component } from "react";

import PropCardList from "./component/propcardlist";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = {
    subjectData: [],
    title: " D-Class Personel"
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
        <h1 classeName="title">{title}</h1>
        <button className="button" onClick={this.handleClick}>
          Load New Test Subjects
        </button>
        <PropCardList subjectData={subjectData} />
      </div>
    );
  }
}

export default App;
