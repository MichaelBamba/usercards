import React from "react";
import PropCard from "./propcard";

const PropCardList = props => {
  const { subjectData } = props;
  return (
    <ul className="PropCardList">
      {subjectData.length > 0 ? (
        subjectData.map(subjectData => (
          <li className="PropCard" key={subjectData.login.uuid}>
            <PropCard subjectData={subjectData} />
          </li>
        ))
      ) : (
        <li>No subjectData Data</li>
      )}
    </ul>
  );
};

export default PropCardList;
