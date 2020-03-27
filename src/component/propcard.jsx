import React, { Component } from "react";
import "./propcardd.css";

const PropCard = props => {
  const { subject } = props;
  return (
    <div>
      <img
        src={subject.picture.large}
        alt={`${subject.name.first} ${subject.name.last}`}
      />
      <p>
        {subject.name.first} {subject.name.last}
      </p>
    </div>
  );
};

export default PropCard;
