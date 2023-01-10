import React from "react";
import { useNavigate } from "react-router-dom";

function ClassButton(props) {
  const { title, children } = props;
  var navigate = useNavigate();

  const onClick = () => {
    navigate("class/" + title);
  };

  const size = { "min-width": "180px" };

  return (
    <div className="cloud" style={size} onClick={onClick}>
      <h1 className="normal">{title}</h1>
      <p className="sub">{children}</p>
    </div>
  );
}

export default ClassButton;
