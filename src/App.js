import React from 'react';
import './style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1> 유우엑스 뱅킹 페이지</h1>
      <p>조회</p>
      <p>이체</p> 
      <p>추천</p> 
      <p>이번주에 내야할 관리비 있지 않아?</p> 
      <p>나 미국으로 1주일정도 여행가는데 돈 얼마나 바꿔야 할까?</p> 
    </div>
  );
}

/*export default function App() {
  return (
    <Router>
    <header>
      <Link to="https://ux.snu.ac.kr">
        <button>이동하기</button>
      </Link>
    </header>
    <hr />
    <main>
      <div>
        <h1> 온갖 잡다한 실험중...</h1>
        <p> UX 테스트 페이지입니다... </p>
        <img
          src="https://i.pinimg.com/564x/0a/a7/74/0aa7744f48b763409affb084b2f50e8c.jpg"
          class="img1"
        />
        <p> 다음의 버튼을 누르시면 실험이 시작됩니다.</p>
        <p>(물론 거짓말입니다.)</p>
        <input
          type="button"
          class="button"
          onclick="newPage()"
          value=" 다음 페이지로 이동"
        />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={NotFound} />
    </main>
  </Router>

  );
}


function newPage() {
  window.location.href = 'https://ux.snu.ac.kr';
}

 버튼을 누르면 다음 페이지로 이동 
--> <input type="button" value="확인" onClick="self.location='이동할페이지';">

function page_href() {

location.href = "link_page.html";

}

document.loaction.href = "";


function execTime() {
  var nStart = new Date().getTime(); //시작시간 체크(단위 ms)
  page_1();
  var nEnd = new Date().getTime(); //종료시간 체크(단위 ms)
  var nDiff = nEnd - nStart; //두 시간차 계산(단위 ms)

  alert(nDiff + "ms");
}
*/
