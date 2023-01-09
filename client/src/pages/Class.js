import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import classInfo from "../data/classInfo.json";

function Class(props) {
  var navigate = useNavigate();
  const { id } = useParams();
  const data = classInfo[id];

  const onClick = () => {
    navigate("/");
  };

  const style = {
    float: "right",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cloud w-100%">
          <button onClick={onClick} style={style}>
            돌아가기
          </button>
          <h1 className="title">{id}</h1>

          <ul>
            {data.map((value) => (
              <li>
                <a href={value.id}>{value.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Class;
