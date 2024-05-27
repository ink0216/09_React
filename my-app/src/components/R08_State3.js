//컴포넌트가 될 파일은 함수, 파일명 다 대문자로 시작해야한다.
import React, {useState} from 'react';

/* 자식 컴포넌트 만들기*/
const ChildId = (props)=>{
    //props가 객체이다.
    // props는 {"handler" : fn} 이렇게 생겼다.
    //이 둘은 똑같은 구문이다
    //const handler = props.handler;
    const {handler} = props; //props의 변수명이랑 같으면 자동으로 들어가는, 순수 JS기술(리액트 아니다.)
    //handler의 동작 : 부모의 상태값을 바꾸는 함수 그거를 자식에게 handler라는 이름을 전달해줬다.
    console.log(handler); //handler 확인
    return(
        //리턴 구문 없으면 오류난다.
        <div className='wrapper'>
            <label htmlFor="inputId" 
            //onChange == '값이 바뀌었을 때'라는 의미  
            
            /* input의 값이 바뀌었을 때
            부모로 부터 전달 받은 함수(handler)를 호출해서 수행하겠다.
            자식 쪽에서 값을 바꿔서 이벤트 발생!! ->handler가 수행됨
            //자식 쪽에서 발생한 이벤트로 인해 부모의 값이 바뀌는 것 == 상태 끌어올리기
             */
            >ID</label>
            {/* label 태그는 input태그와 연결하기 위한 용도
                label 태그의 for속성에 input의 id를 적으면 됐었는데
                //JS에서는 for이 반복문이어서 이름이 겹쳐서 여기서는
                htmlFor 속성으로 쓴다.
            */}
            <input type="text" id="inputId" onChange={handler} />
            
        </div>
    );
}
const ChildPw = ({handler}
/* 부모에게 전달 받은 게 props == {handler : fn} 꼴인데 handler가 같으면 fn을 저 위치({handler})에 들어간다
props라고 해도 된다.
 */

)=>{ //handler라는 key값을 가지는 것을 대입하겠다.
    return(
        //리턴 구문 없으면 오류난다.
        <div className='wrapper'>
            <label htmlFor="inputPw">PW</label>
            <input type="password" id="inputPw" onChange={handler}/>
            {/* pw를 입력하면 onChange가 동작해서 handler(부모로 부터 전달받은 pwHandler이고 
                setPw 함수(부모의 state값 바꿈) 호출)를 시행 
                ->리랜더링 되는데 리랜더링 시마다 id,pw의 길이를 재서 둘 다 입력시 버튼이 활성화됨
                */}
            
        </div>
    );
}
const ChildTest = (props)=>{
    return(
        <div>
            <button onClick={()=>{props.handler("BBB") //handler라는 함수를 꺼내와서 매개변수로 "BBB"를 전달하겠다.

            }}>변경하기</button>
            {/* test, handler 두 개를 전달받는다. */}
        </div>
    )
}
/* 부모 컴포넌트 만들기*/
const ParentComponent = ()=>{
    //상태변수(State, useState //리랜더링을 가능하게 하는 setter함수
        // )를 선언하기
    const [id, setId] = useState('' //빈 문자열

    ); //상태변수는 id, id의 초기값은 빈칸

    const [pw, setPw] = useState('' //빈 문자열

    ); //상태변수는 pw, pw의 초기값은 빈칸

    //두 개를 입력받는다.

    //이벤트 : 동작, 행위
    //이벤트 리스너 : 동작(이벤트)을 감지
    //이벤트 핸들러 : 이벤트가 감지 되었을 때 수행할 함수
    
    //이벤트 핸들러를 만들어보잣!
    const idHandler = e=>setId(e.target.value);
    // ()=>{}에서
    //매개변수 하나면 소괄호 생략 가능
    //중괄호 내에 코드 한 줄이면 중괄호도 생략 가능

    const pwHandler = e=>setPw(e.target.value);

    const [test, setTest] = useState('A'); //test 초기값 A
    const testFn=(str)=>{
        setTest(str); //호출 시 전달받은 값으로 test값을 바꾸겠다.
    }
    return(
        //함수에서는 무조건 하나만 리턴 가능 ->여러 개 해야하면 묶어서 보내기
        //부트에서는 fragment는 조각내는거고
        //여기에서 fragment는 하나로 합치는거다
        <>
        {/* 얘네 둘 한테는 props하기 handler이름으로 보내기 */}
        <ChildId handler={idHandler}/>
        {/* props를 이용해 이벤트 핸들러용 함수를 
        자식 컴포넌트에게 전달 */}
        <ChildPw handler={pwHandler}
            /* handler 이름으로 함수를 전달해준다. */
        />

        <div className="wrapper">
            <button disabled = {id.length===0 || pw.length===0}
            /*  id,pw가 입력되지 않았으면 버튼을 비활성화 시킨다. 
            버튼 막혀있게 하기(true) 활성화시키기(false)
            */
            >Login</button>
        </div>

        <h2>test 값 : {test}</h2>
        <ChildTest handler={testFn}/>
        </>
    );
}

export default ParentComponent; //외부에서 import하면 기본적으로 부모를 보내주겠따.
