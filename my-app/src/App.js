//import logo from './logo.svg'; //리액트 앱 처음 만들었을 때 돌고있던 이미지이다.
import './App.css'; //이따가 여기 들어가서 내용 바꿀거다
//CSS를 얻어와 아래 작성된 컴포넌트에 적용(자동으로 적용된다.)

//import [여기서 사용할 이름] from [js 파일 경로] 순서
import ClassComponent from './components/R01_ClassComponent';
// ./ : 현재 폴더  
//R01_ClassComponent.js에서 리턴(export)하는 컴포넌트를 여기에 가져오기(import)
//가져온 컴포넌트를 여기서는 ClassComponent라고 부를거다
//  ->사용 시 작성법 : 원하는 위치에 <ClassComponent/> 이렇게 사용하면 된다

import FunctionComponent from './components/R02_FunctionComponent';
//가져온 것을 여기서는 FunctionComponent라고 부를거다

function App() {
  const temp=100;
  return (
    /* (중요!)
    자바든, JS든 가리지 않고 return하면 딱 한 개만 반환가능
    여러 개를 리턴하고싶으면 여기에서도 똑같이 묶어서 반환해야한다

    리액트 컴포넌트를 반환하는 함수는
    딱 한 개의 컴포넌트만 반환이 가능하다!!!!!!!!!
    ->여러 요소를 반환하고 싶을 때에는 "묶어서" 반환하기!!!!
    */
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // 여기가 js여서 이멧이 적용이 안된다!

    //버츄얼 돔 내용 변한게 있으면 적용된다 비교해서
    //js변수를 html에 출력하는 게 엄청 쉬워진다 (temp)
    // <div> {/* 이 div가 통째로 하나의 컴포넌트이다.
    // 컴포넌트 만드는 방법 두 가지
    // - 클래스형 컴포넌트
    // - 함수형 컴포넌트 : 요즘엔 이걸 더 많이 쓴다.
    
    // App.js가 메인페이지 역할을 한다.
    
    // */}
    //   <h1>이것이 React??</h1>
    //   <h3>JSX : JS + XML (JS 파일에서 html같이 태그를 작성 가능하게 하는 것)</h3>
    //   <h1>temp : {temp}</h1>
    // </div>
    // <div> {/* 묶으면 오류가 사라진다.
    // db에서 select할 떄에도 여러 행이어도, 하나의 resultSet이 반환되는거다 */}
    //   <h1>테스트</h1>
    //   <h3>테스트</h3>
    //   {/* 근데 그럼 화면에 div도 보여서, th:block 태그처럼 해석된 후 사라지는 태그처럼 사용하는 게 여기에 있다.
    //   fragment : 하나의 조각으로 합쳐서 만들겠다는 뜻
    //   타임리프에서의 fragment : 조각으로 쪼갠다는 뜻
    //   */}
    //   {/* fragment(<> </>) : 반환되는 요소(컴포넌트)를 묶는 용도이고, 해석되지 않음 
    //     태그명이 없음
    //   */}
    
    // </div>
    // <> 이러면 그냥 하나로 묶는다는 의미이고, h1, h3만 보인다.
    //   <h1>테스트</h1>
    //   <h3>테스트</h3>
    // </>
    <>
    {/* ClassComponent를 현재 위치에 렌더링하겠다. */}
      <ClassComponent/>
      <ClassComponent/>
      <ClassComponent/>
      {/* 리액트의 장점 : 원하는 특정한 모양이 반복되는 경우, 컴포넌트로 만들어서 이렇게 사용하면 된다 */}
      <ul>
        <li>
          <ClassComponent/>
        </li>
        <li>
          <ClassComponent/>
        </li>
      </ul>
      <hr/>
      <FunctionComponent/>
    </>
  );
}

export default App; //export==내보내다
//이 js에서는 App이라는 함수를 수출할거다
//어디로 ? 이거를 수입한index.js로
//근데 그게 화면에 root아이디인 곳에 보여질거다
//js안에 html 코드가 들어있는 형태
//이 내부의 html 작성법을 JSX라고 한다
//html도 xml과 표기법 동일해서(태그를 이용하는 작성법)

