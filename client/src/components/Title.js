import React from "react";
import { Link } from "react-router-dom";

function Title(props) {
  return (
    <div className="col">
      <Link to={"/"}>
        <div className="cloud">
          <h1 className="title">AlgorithmDay</h1>
          <p className="sub">꿈꾸는 기업에 취업하는 그날까지, 코딩테스트에서 자주나오는 문제와 사람들이 가장많이 틀리는 유형으로 문제를 파악하고 학습합니다.</p>
        </div>
      </Link>
    </div>
  );
}

export default Title;
