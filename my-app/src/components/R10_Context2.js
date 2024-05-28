import React, {createContext, useContext, useState} from 'react';

/* 1. Context 객체 생성 */
const TestContext = createContext(); 
//후손에서 특정한 값을 바꿀거다(상태 변경)
//근데 그걸 자식을 건너뛰고 부모에게 바로 오도록 해보기
//상태 끌어올리기

/* 4. 후손 컴포넌트 */
const GrandChild = () => {
    //나 할아버지 상태값을 바꿔보고 싶어오~~~
    const {number,setNumber} = useContext(TestContext); //여기서 제공받았던 Context를 사용할거다 그 이름은 TestContext였다.
    //key값이 number인 것은 number변수(parent의 상태변수)에 저장
    //key값이 setNumber인 것은 setNumber변수(Parent 상태 변수 값을 바꿀 수 있는 함수)에 저장
    //TestContext에 제공된 값 모양은
    // {"number" : number, "setNumber" : setNumber} 이런 모양이었다.
    // number, setNumber를 쓰겠다.

    //부모 쪽에서 자신의 상태변수와 그걸 바꿀 수 있는 함수를 제공해줫는데 그걸 쓰려고 꺼냈다.
    return(
        <>
            <h3>GrandChild Component 입니다.</h3>
            <input type='number' value={number} onChange={e=>{setNumber(e.target.value)}}
            //입력한 값으로 부모의 값을 바꾸겠다.
            
            //input의 value == 초기값
            //값이 바뀔 때 마다 함수를 실행하겠다.
            />
            {/* 초기값 0이었는데 
            input태그의 change이벤트가 일어나서 setNumber가 호출됨 부모로부터 제공받은 함수로 부모의 상태 바꿀 수 있는 함수
            상태변수값이 바뀌면 리랜더링이 일어나면서 화면(부모 컴포넌트가 리턴하는 것)이 다시 만들어짐
            number값이 새롭게 세팅됨
            */}
            <hr/>
            <h4>{number}</h4>
            {/* 이 값은 왜 바뀔까? 새롭게 세팅된 값이 여기까지 넘어온다*/}
        </>
    );
}


/* 3. 자식 컴포넌트 */
const Child = () => {
    return(
        <>
            <h2>Child Component 입니다.</h2>
            <GrandChild/>
        </>
    );
}


/* 2. 부모 컴포넌트 */
const Parent = () => {
    //상태 변수 선언
    const [number, setNumber] = useState(0);
    //컴포넌트 상태가 바뀌면 해당 컴포넌트에 대해서 리랜더링한다.
    //자식이 부모의 값을 바꾸면 부모가 리랜더링 되면서 자식이 바꾼 값이 부모까지 올라온다.
    return(
        //js객체 {"number" : number, "setNumber" : setNumber}
        <TestContext.Provider value={{number, setNumber}}
        // 부모의 상태변수와, 상태를 변경할 수 있는 함수를 하위의 모든 후손들에게 제공해준다

        /* 리액트에서만 {number, setNumber}처럼 작성하면 아래와 같이 변환된다
            js객체 {"number" : number, "setNumber" : setNumber}
            후손 모두에게 제공해줌(쓸 지 안 쓸지는 후손들이 정해서 씀)
          */
        //객체 형태로 전달해보기
        //후손 중에서 이 값을 꺼내 쓸 수 있는데 이 값은 반드시 하나만 보낼 수 있다!!!!
        /* Context는 값을 1개만 제공할 수 있다!
            -> 여러 개 제공하고 싶으면 {}(객체), [](배열)로 묶으면 된다
          */
        >
        <h1>Parent Component 입니다 : 
            <span className='red'>{number}</span>    
            {/* Parent 컴포넌트의 상태값을 화면에 출력 (빨간글씨 & h1크기로) 
            처음에 화면에는 0이라고 나올거다(초기값)*/}
        </h1>

        <Child/>
        </TestContext.Provider>
    );
}

export default Parent;