import React, { useState } from 'react'; //imrs 하면 다 생긴다.
//진짜 많이 써서 단축키 지원해주는것!

//State : 컴포넌트의 상태를 관리해주는, 컴포넌트 내에 있는 전역 변수

//그러기 위한 useState()함수/메서드
// - 컴포넌트의 상태(State)값이 변하게 될 경우
//   해당 컴포넌트를 다시 렌더링(ReRendering)하는 함수
/* <h1>a</h1> 였는데
js를 이용해서 내용을 b라고 변경한 경우
이전 것을 지우고 새로운 것을 다시 랜더링해서 만드는 것을 지원하는 함수
*/
const StateEx1 = ()=>{
    const [test,setTest] = useState('A');
    /*test : 컴포넌트 StateEx1의 전역변수(State)가 된다
            (State 선언)

    setTest : test값을 변경하기 위한 함수(setter같은 거다)
        setTest(a){test=a} 이런거다

    useState('A') 
        - test가 변경을 감지할 State임을 등록
            + test변수에 초기값으로 'A' 를 대입
        - test 값을 변경할 수 있는 함수(setTest())를 등록
    */

    //버튼 클릭 시 동작할 함수(이벤트 핸들러)를 정의
    const changeFn = ()=>{ //클릭 됐을 때 test의 값이 A였던 경우
        if(test ==='A') setTest('B')//test='B'; 값 바꿀려면 setTest() 써야돼서 이걸로는 동작 안한다.
        else   setTest('A');
        //리액트는 리랜더링할 때 변한 부분만(h1태그만) 리 랜더링하고 나머지는 리랜더링하지 않는다!!!
    };
    return(
        <>
            <h1>{test}</h1> {/* test값을 여기에 출력 */}
            <button onClick={changeFn}>Change!</button>
            {/* onClick : 클릭이 되었을 때를 감지하는 이벤트 리스너!!
            중괄호 안의 함수가 이벤트 핸들러 */}
        </>
    );



}
export default StateEx1;



