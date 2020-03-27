import React, { Component } from "react";
import { Card, CardImage, Container } from "bloomer";
import "./propcardd.css";

const PropCard = props => {
  const { subjectData } = props;
  return (
    <div>
      <Container>
        <Card>
          <CardImage>
            <img
              src={subjectData.picture.large}
              alt={`${subjectData.name.first} ${subjectData.name.last}`}
            />
          </CardImage>
          <p>
            Name: {subjectData.name.first} {subjectData.name.last}{" "}
          </p>
          <p>
            Email:
            {subjectData.email}
          </p>
          <Container>
            <p> Age: {subjectData.dob.age} </p>
            <p> Status: insufficient clearance</p>
          </Container>
        </Card>
      </Container>
    </div>
  );
};

export default PropCard;
