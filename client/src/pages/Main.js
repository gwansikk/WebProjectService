import React from "react";
import ClassButton from "../components/ClassButton";
import Title from "../components/Title";

import viewInfo from "../data/viewInfo.json";

function Main(props) {
  const data = viewInfo;

  return (
    <div className="container">
      <Title />
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

      <hr />

      <div className="row wrap-none text-center">
        <ClassButton title={"해시"}>Key-value 쌍으로 데이터를 빠르게 찾아보기</ClassButton>
        <ClassButton title={"스택&큐"}>LIFO, FIFO, push, pop 스택과 큐를 이용해서 문제를 해결하기</ClassButton>
        <ClassButton title={"힙"}>힙은 특정한 규칙을 가지는 트리로, 힙을 이용해서 우선순위 큐를 구현할 수 있어요</ClassButton>
        <ClassButton title={"정렬"}>정렬을 이용하여 문제를 효율적으로 풀어보기</ClassButton>
      </div>

      <div className="row wrap-none text-center">
        <ClassButton title={"완전탐색"}>무식해 보여도 사실은 최고의 방법일지도?</ClassButton>
        <ClassButton title={"탐욕법"}>부분적인 최적해가 전체적인 최적해가 되는 마법</ClassButton>
        <ClassButton title={"동적계획법"}>불필요한 계산을 줄이고 효율적으로 최적해를 찾아가는 해법</ClassButton>
        <ClassButton title={"DFS&BFS"}>깊이/너비 우선 탐색을 이용하여 해법을 찾아봐요</ClassButton>
      </div>

      <div className="row wrap-none text-center">
        <ClassButton title={"이분탐색"}>이분탐색 기법을 사용하여 효율적으로 값을 찾아봐요</ClassButton>
        <ClassButton title={"그래프"}>엣지를 통해 그래프의 노드를 탐험해봐요!</ClassButton>
        <ClassButton title={"코딩테스트"}>프로그래머스에서 엄선된 문제를 풀어봐요</ClassButton>
        <ClassButton title={"실전문제"}>특정 회사에서 기출된 문제를 연습해봐요</ClassButton>
      </div>
    </div>
  );
}

export default Main;
