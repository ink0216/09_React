//함수형은 컴포넌트 안쓴다.
import React,{useState} from 'react'; /* 자동완성 빠르게 하고 싶으면 imr하고 자동완성 하면된다 */

const ClickCount = ()=>{
    const [count,setCount] = useState(100); //count의 초기값으로 100 설정
    /* 한 번에 변수 두 개를 선언하는 것
    useState도 함수인데 이걸 호출하면 배열이 반환된다
    그 배열 0번에 count, 1번에 setCount가 들어간다 */
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>클릭 시 1 증가</button>
        </div>
        /* 0이 처음에 count에 초기화 되는데 클릭할 때마다 1씩 더해서 count에 새로 세팅하는 것
        그럼 화면에 h3로 1이 나오고, 또 클릭하면 화면에 2나온다. */
    );
}



// 함수형 컴포넌트 만드는 방법
// 1. 함수 생성하기
const FunctionEx = ()=>{ 
    //외부에서 이 함수를 호출하면 return 구문 내에 있는 것을 리턴해주는 함수
    return (
        /* 리액트 컴포넌트에 class 추가 시 class=""가 아닌
            className이라고 작성해야 한다!!!
             */
            // 2. return 구문에 출력하고자 하는 html 코드 작성
        <>
            <h2 className='red'>함수형 컴포넌트 입니다.</h2>
            <hr/>
            <ClickCount/> {/* 이렇게 태그 형식으로 적으면 여기에 랜더링이 된다. */}
        </>
    );
}

// 3. 만든 함수를 export default 지정하기
export default FunctionEx; //App.js에서 import하기







