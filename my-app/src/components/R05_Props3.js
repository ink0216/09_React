import React from 'react'
// App.js(부모)
//ㄴChildComponent(바로 밑의 자식)
//      ㄴGrandChildComponent(후손)

//'abc'라는 값을 App이 후손까지 물려주는 거 해보겠다.
//후손 컴포넌트는 자식보다 위에다 써야한다!!
//왜 ? 
//정확히 따지면 함수가 아닌, 함수가 대입된 변수여서,
//JS가 해석 될 때 function이라는 것부터 찾아서 위치 알아두고, 위에서 호출하면
//아까 알아뒀던 밑에있는 function 함수 정의 부분을 찾아갈 수 있음(위치에 제약을 받지 않음)
//function 붙은 애들은 처음에 찾는 과정 떄문에 다른 애들의 해석이 조금 늦어지는 문제가 생겨서 

//코드는 위에서 아래로 순서대로 해석하는, 함수를 변수에 대입하는 형태로 많이 사용한다. -> 초반 로딩 속도가 빨라진다.
//만약 후손을 밑에 만든 경우, 자식에서 후손을 호출할 때 제대로 되지 않는다.
//후손 변수가 아직 해석되지 않아서!
//함수는 function 이름(){} 이게 함수이다.

//
const GrandChildComponent = (props) =>{
    const {name,age} = props;
    /* props 객체에서 key값이 같은 것들을 name,age에 따로 저장 */

    return(
        <h3>이름 : {name} / 나이 : {age}</h3>
    );
}
//자식 컴포넌트
const ChildComponent = (props //App에서 전달 받은 값이다
    
)=>{
    return(
        <> {/* App에서 전달받은 값을 후손에게 다시 전달해주는 것 == Props Drilling*/}
            <GrandChildComponent  // 받은 것을 그대로 보내주기
            name={props.name}
            age  = {props.name === '김영희' ? 20 : 25}

            />
            {/* 리액트에서는 ==(동등비교연산)을 권장하지 않음(컴파일 시 에러가 난다)
            ===(동일비교연산, 타입까지 다 같은 것)을 권장한다
            리액트에서는 타입스크립트도 사용한다. (자료형의 애매함을 없애줌)
            */}
        </>
    );
}
export default ChildComponent;



























