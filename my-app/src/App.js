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

import Props1 from './components/R03_Props1';

import Props2 from './components/R04_Props2';

import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';

import State2 from './components/R07_State2';

import State3 from './components/R08_State3';

import Context1 from './components/R09_Context1';

import Context2 from './components/R10_Context2';

import Context3 from './components/R11_Context3/Parent';

function App() { //return구문 전체를 Component라고 부른다
  const temp=100;
  return ( //JSX : JS+XML (JS에서 XML 표기법인 태그 표기법을 사용한다) 
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
      <Props1 num='1' name='홍길동'age='20' score='90'/>
      {/* 자식 컴포넌트에게 
      값을 전달해준다. 그럼 자동으로 객체 형태로 k:v형태로 들어간다
      props에 */}
      <hr/>
      {/* 컴포넌트는 재활용 할 수 있는 특징이 있다.!!! 
        하나의 틀(양식) 잡아놓고 이렇게 값만 달라지게 값 전달할 수 있다.
      */}
      <Props1 num='2' name='강찬혁' age='999' score='70'/>
      {/* for문으로 db에서 조회해와서 막 돌려서 출력하는 것도 할 수 있다. */}
      <hr/>
      <Props2 name='강감찬' age='72' gender='남자'/>
      <Props2 name='천추태후' age='66' gender='여자'/>
      <hr/>
      <Props3 name='고길동'/>
      <Props3 name='김영희'/>
      {/* age는 child에서 만들어냈기 때문에 전달 안해도 된다 
      name은 App이 전달해줬고,
      age는 Child가 전달해줬다.

      리액트의 단점 : 여기저기서 값을 보내주고 해서 이 값은 어디서 왔는지 찾기 힘들다.
      근데 잘 활용하면 컴포넌트를 활용해서 원하는 화면을 금방금방 만들 수 있다.
      */}
      <hr/>
      <State1/>
      <hr/>
      <State2 init="52" step="10"/>
      {/* init이랑 step 두 개를 전달해야한다 */}
      <hr/>
      <State3/>
      <hr/>
      <Context1/>
      <hr/>
      <Context2/>
      <hr/>
      <Context3/>

    </>
  );
}
//외부에서 이걸 수입하면 우리는 이걸 수출할거야
export default App; //export==내보내다
//이 js에서는 App이라는 함수를 수출할거다
//어디로 ? 이거를 수입한index.js로
//근데 그게 화면에 root아이디인 곳에 보여질거다
//js안에 html 코드가 들어있는 형태
//이 내부의 html 작성법을 JSX라고 한다
//html도 xml과 표기법 동일해서(태그를 이용하는 작성법)
/* props
리액트는 컴포넌트(함수의 리턴값이 하나의 요소가 된 것) 단위로 돼있다.
함수를 export하고 필요한 곳에서 그 함수를 import해서 호출할 수 있다.->그 자리에 inport해왔던 함수의 반환값이 들어오게된다
App(상위 컴포넌트)에서 하위 컴포넌트에게 값을 전달하는 것 == props
props는 한번만 할 수 있는 게 아니라 계속 할 수 있다.받은 컴포넌트를 또 자손 컴포넌트에게 또 줄 수 있다.(props를 계속 대물림 해주는 것)

state
컴포넌트는 '상태(state)' 라는 전역변수가 있다. 상태(state)값이 변하면 화면을 랜더링을 다시하는 리랜더링을 진행한다.
함수형 컴포넌트는 useState를 별도로 import 받아서 useStATE를 이용해서 상태의 변화를 감지한다.


*/
