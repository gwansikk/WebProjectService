import React, { useState } from "react";

function Main(props) {
  const [viewer, setViewer] = useState("카테고리");

  const onClick = (e) => {
    setViewer(e.currentTarget.value);
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
        <div className="cloud w-100%">
          <h1 className="title">공지</h1>
          <ul>
            <li>스터디공부에 스트레스 받지 말고 쉬고 싶을 때 미리 말하기!</li>
            <li>모든 코드 시간복잡도(Big-O) 계산해서 #1 라인에 표시하기</li>
          </ul>
        </div>

        <div className="cloud w-100%">
          <h1 className="title">일정</h1>
          <ul className="list-none">
            <li>21.11.21 : 코테를 위한 알고리즘, 개설 및 시작</li>
            <li>22.02.20 : 코테용 언어 배우기 (Python, Java, C++)</li>
            <li>22.03.20 : 교내 프로그램 "거북이" 연계 활동</li>
            <li>22.04.17 : 22년 중간고사로 인한 활동 정지</li>
            <li>22.05.01 : 시즌2 시작</li>
            <li>22.07.25 : 시즌2 활동 정지</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="cloud w-100%">
          <h1 className="title">정보</h1>

          <ul>
            <li>
              <a href="https://steemit.com/kr/@sanghkaang/3-0-why-the-web-3-0-matters-and-you-should-know-about-it">왜 웹3.0이 중요하고 알아둬야 할까</a>
            </li>
          </ul>
        </div>

        <div className="cloud w-100%">
          <h1 className="title">공유</h1>

          <ul>
            <li>
              <a href="https://covenant.tistory.com/220">취업을 위한 코딩테스트 공부방법</a>
            </li>
            <li>
              <a href="https://m.blog.naver.com/dpszeagal33/222355970844">개발자가 갖추어야 할 9가지 기술</a>
            </li>
            <li>
              <a href="https://madplay.github.io/post/time-complexity-space-complexity">시간복잡도와 공간복잡도</a>
            </li>
          </ul>
        </div>
      </div>

      {viewer === "카테고리" ? (
        <>
          <div className="row wrap-none text-center">
            <button className="cloud w-100%" type="button" value="해시" onClick={onClick}>
              <h1 className="nomarl">해시</h1>
              <p className="sub">Key-value 쌍으로 데이터를 빠르게 찾아보기</p>
            </button>
            <button className="cloud w-100%" type="button" value="스택/큐" onClick={onClick}>
              <h1 className="nomarl">스택/큐</h1>
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
            <button className="cloud w-100%" type="button" value="DFS/BFS" onClick={onClick}>
              <h1 className="nomarl">DFS/BFS</h1>
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
              <p className="sub">백준문제가 아닌 기업에서 다루는 문제를 풀어봐요</p>
            </button>
            <button className="cloud w-100%" type="button" value="실전문제" onClick={onClick}>
              <h1 className="nomarl">실전문제</h1>
              <p className="sub"> 특정 회사에서 기출된 문제를 연습해봐요</p>
            </button>
          </div>
        </>
      ) : (
        <div className="row">
          <div className="cloud w-100%">
            <h1 className="title">{viewer}</h1>
            <ul>
              <li>
                <a href="https://static.gwansik.dev/image/Greedy3.png">문제1</a>
              </li>
            </ul>
            <button onClick={() => setViewer("카테고리")}>돌아가기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
