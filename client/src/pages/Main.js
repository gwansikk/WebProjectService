import React from "react";
import { useNavigate } from "react-router-dom";

import viewInfo from "../data/viewInfo.json";

function Main(props) {
  var navigate = useNavigate();
  const data = viewInfo;

  const onClick = (e) => {
    navigate("/class/" + e.currentTarget.value);
  };

  return (
    <div className="container">
      <div className="col">
        <div className="cloud">
          <h1 className="title">AlgorithmDay</h1>
          <p className="sub">꿈꾸는 기업에 취업하는 그날까지, 코딩테스트에서 자주나오는 문제와 사람들이 가장많이 틀리는 유형으로 문제를 파악하고 학습합니다.</p>
        </div>
      </div>

      <div className="row">
        {data.mainInfo.map((value) => (
          <div className="cloud w-100%">
            <h1 className="title">{value.title}</h1>
            <ul>
              {value.list.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="row">
        {data.shareInfo.map((value) => (
          <div className="cloud w-100%">
            <h1 className="title">{value.title}</h1>
            <ul>
              {value.list.map((list) => (
                <li>
                  <a href={list.href}>{list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="row wrap-none text-center">
        <button className="cloud w-100%" type="button" value="해시" onClick={onClick}>
          <h1 className="nomarl">해시</h1>
          <p className="sub">Key-value 쌍으로 데이터를 빠르게 찾아보기</p>
        </button>
        <button className="cloud w-100%" type="button" value="스택&큐" onClick={onClick}>
          <h1 className="nomarl">스택&큐</h1>
          <p className="sub">LIFO, FIFO, push, pop 스택과 큐를 이용해서 문제를 해결하기</p>
        </button>
        <button className="cloud w-100%" type="button" value="힙" onClick={onClick}>
          <h1 className="nomarl">힙</h1>
          <p className="sub">힙은 특정한 규칙을 가지는 트리로, 힙을 이용해서 우선순위 큐를 구현할 수 있어요</p>
        </button>
        <button className="cloud w-100%" type="button" value="정렬" onClick={onClick}>
          <h1 className="nomarl">정렬</h1>
          <p className="sub"> 정렬을 이용하여 문제를 효율적으로 풀어보기</p>
        </button>
      </div>

      <div className="row wrap-none text-center">
        <button className="cloud w-100%" type="button" value="완전탐색" onClick={onClick}>
          <h1 className="nomarl">완전탐색</h1>
          <p className="sub">무식해 보여도 사실은 최고의 방법일지도?</p>
        </button>
        <button className="cloud w-100%" type="button" value="탐욕법" onClick={onClick}>
          <h1 className="nomarl">탐욕법</h1>
          <p className="sub">부분적인 최적해가 전체적인 최적해가 되는 마법!</p>
        </button>
        <button className="cloud w-100%" type="button" value="동적계획법" onClick={onClick}>
          <h1 className="nomarl">동적계획법</h1>
          <p className="sub"> 불필요한 계산을 줄이고 효율적으로 최적해를 찾아가는 해법.</p>
        </button>
        <button className="cloud w-100%" type="button" value="DFS&BFS" onClick={onClick}>
          <h1 className="nomarl">DFS&BFS</h1>
          <p className="sub">깊이/너비 우선 탐색을 이용하여 해법을 찾아봐요.</p>
        </button>
      </div>

      <div className="row wrap-none text-center">
        <button className="cloud w-100%" type="button" value="이분탐색" onClick={onClick}>
          <h1 className="nomarl">이분탐색</h1>
          <p className="sub">이분탐색 기법을 사용하여 효율적으로 값을 찾아봐요.</p>
        </button>
        <button className="cloud w-100%" type="button" value="그래프" onClick={onClick}>
          <h1 className="nomarl">그래프</h1>
          <p className="sub">엣지를 통해 그래프의 노드를 탐험해봐요!</p>
        </button>
        <button className="cloud w-100%" type="button" value="코딩테스트" onClick={onClick}>
          <h1 className="nomarl">코딩테스트</h1>
          <p className="sub">프로그래머스에서 엄선된 문제를 풀어봐요</p>
        </button>
        <button className="cloud w-100%" type="button" value="실전문제" onClick={onClick}>
          <h1 className="nomarl">실전문제</h1>
          <p className="sub"> 특정 회사에서 기출된 문제를 연습해봐요</p>
        </button>
      </div>
    </div>
  );
}

export default Main;
