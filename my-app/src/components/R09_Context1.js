import React, {createContext, useContext} from 'react';
//여기서는 Drilling, Lifting 아무것도 안했다.
/* 1. Context객체 생성(누구든지 쓸 수 있는 전역변수 같은 객체 만들기) */
//Context를 저장하는 변수명은 무조건 대문자로 시작해야 한다
const TestContext = createContext(); //객체 생성 완료됐다.

//손주
/* 4. 후손 컴포넌트 */
const GrandChild = (
    //부모로부터 전달받은 props이런거 아무것도 없다.
)=>{ //현재 컴포넌트에서 Context 객체를 얻어와서 사용
    // -> TestContext에서 제공하는 값('Parent에서 전달한 값')을 얻어와 parentValue에 대입한 거다
    const parentValue = useContext( // useContext (여기서 꺼내서 쓸거야)
        TestContext // Context 객체
    //TestContext에다가 value를 담아놨다. -> 그럼 parentValue에 'Parent에서 전달한 값'이라고 대입이 될거다
    
    );
    return( // parent로부터 GrandChild까지 props 안쓰고 값 전달하기 해봤다.
        <>
            <h3>GrandChild Component 입니다. (  {parentValue}  )</h3>
        </>
    );
}

//자식
/* 3. 자식 컴포넌트 */
const Child = ()=>{
    return(
        <>
            {/* 여기서는 useContext로 꺼내서 쓰지 않았다.(여기는 건너뜀) */}
            <h2>Child Component 입니다.</h2>
            <GrandChild/>
        </>
    );
}

//부모
/* 2. 부모 컴포넌트 */
const Parent = ()=>{
    return(
        /* Context 객체를 이용해서 하위 컴포넌트에 value를 제공하기 */
        //컴포넌트 객체가 저장된 변수 TestContext
        <TestContext.Provider value='Parent에서 전달한 값'>
            {/* 이 밑에 전체적으로 값을 제공할거야 */}
            <h1>Parent Component 입니다.</h1>
            <Child/>
        </TestContext.Provider>
    );
}
export default Parent;





