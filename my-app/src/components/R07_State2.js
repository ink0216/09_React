import React, { useState } from 'react';
// useState는 전역변수의 상태값의 변화를 감지해서 리랜더링하는 함수

const StateEx2 = (props //부모로부터 받은 값

) =>{ //props와 useState를 같이 쓰는 예제

    //props로 전달받은 값 중
    // init 값을 count의 초기값으로 설정

    // 그리고 count값을 바꿀려면 setCount를 변경해야하고,
    // 그렇게 변경하면 StateEx2 컴포넌트에서 변경된 부분만 리랜더링이 진행된다.
    const [count,setCount] = useState(Number(props.init)); 
    // 상태값이 바뀌면 리랜더링이 된다. 그 값을 바꾸려면 setCount를 이용해야 한다.
    /* props.init, props.step하면 무조건 문자열로 넘어와서 확실하게 하려면 Number라고 */
    return(
        <div className='count-container'>
            {/* props로 전달받은 값 이용하겠다. */}
            <button onClick={()=>{setCount(count- Number(props.step))}}>-{props.step}</button>
            <h3>count : {count}</h3>
            <button onClick={()=>{setCount(count + Number(props.step))}}>+{props.step}</button>
            {/* state값을 변한 값으로 새로 세팅하겠다. 그럼 리랜더링된다. */}
        </div>
    );
}
export default StateEx2;



