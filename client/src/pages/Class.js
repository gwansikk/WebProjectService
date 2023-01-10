import React from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

import classInfo from "../data/classInfo.json";

function Class(props) {
  const { id } = useParams();
  const data = classInfo[id];

  return (
    <div className="container">
      <Title />
      <div className="row">
        <div className="cloud w-100%">
          <h1 className="title">{id}</h1>

          <ul>
            {data.map((value) => (
              <li>
                <a target="_blank" rel="noopener noreferrer" href={value.id}>
                  {value.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Class;
