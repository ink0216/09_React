/* 컴포넌트를 반환할 JS 파일은 무조건 대문자로 시작해야한다!!!
자바로 따지면 클래스 파일같은 것이다.
*/
import React, {Component} from 'react'; //react라는 폴더에서 가져올거다 node_modules 폴더에 있다.
//그 폴더 내에서 두 가지를 꺼내올거다
// -> node_modules 폴더에서 'react' 관련 라이브러리를 얻어와 해당 페이지에서 사용할건데
// 사용 시 이름을 React, Component라고 지정하겠다라는 의미 

// js에서 alert()는 원래 window.alert()로 해야 하는게 정석이다.
//리액트도 React.state로 써야 하는데 import해와서 생략해서 그냥 state 해도 된다
//------------------------------------------------------------
// node_modules : Node.js에서 프로젝트가 의존하여 받은 패키지, 라이브러리가 저장된 폴더

// 클래스형 컴포넌트
// - React.Component 클래스를 상속받아 구현
// (React는 생략해서 사용 가능)
//------------------------------------------------------------------
//클래스형 컴포넌트를 만들기 위한 단계

// 클래스형 컴포넌트 만들기
// 1. Component 상속 받기
class ComponentEx extends Component{ //자바에서의 클래스 : 객체를 정의하기 위한 설계도
    //여기에서의 클래스 : 컴포넌트를 만들기 위한 설계도

    // 2. render() 함수 작성하기(필수)
    //      이 함수 외에 엄청 많은 함수들도 만들 수 있다.
    render(){
        
  // render() 함수 : 
  // return 되는 html형식의 코드(jsx, js + xml)를 화면에 출력하는 함수
  // 화면이 변경되어야 할 시점에 자동으로 호출됨.
  // ** Component를 상속 받은 하위 클래스에 반드시 있어야 하는 함수**
        //이 안에 return 구문을 작성해야한다.
        //return(컴포넌트)
        return(
            <> {/* fragment(한 조각으로 만들겠다.) */}
                <h2>클래스형 컴포넌트 입니다.</h2>
                <hr/> {/* 열자마자 닫겠다 이렇게 작성해야 한다. */}
            </>
        );
    }
}

// 3. 만든 class를 export default 지정하기
export default ComponentEx;

// ComponentEx 라는 컴포넌트를 내보내겠다는 의미
// -> 다른 .js 파일에서 해당 컴포넌트를 import해서 사용 가능
//외부에서 이 js파일을 import하면 (App.js)

