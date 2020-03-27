import React, { Component } from "react";
import "./propcardd.css";

const PropCard = props => {
  const { subjectData } = props;
  return (
    <div>
      <img
        src={subjectData.picture}
        alt={`${subjectData.name.first} ${subjectData.name.last}`}
      />
      <p>
        {subjectData.name.first} {subjectData.name.last}
      </p>
    </div>
  );
};

export default PropCard;
