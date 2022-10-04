import React from "react";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  var navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="cloud">
          <h1 className="nomarl" onClick={onClick}>
            코테를 위한 알고리즘 시즌2
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Nav;
