import React, { Component } from "react";
import { Card, CardImage } from "bloomer";
import "./propcardd.css";

const PropCard = props => {
  const { subjectData } = props;
  return (
    <div>
      <Card>
        <img
          src={subjectData.picture.large}
          alt={`${subjectData.name.first} ${subjectData.name.last}`}
        />
        <p>
          Name: {subjectData.name.first} {subjectData.name.last}{" "}
          <p>
            Email:
            {subjectData.email}
          </p>
        </p>
      </Card>
    </div>
  );
};

export default PropCard;
