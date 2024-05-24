//props는 내장돼있어서 따로 import안해도 된다
import React from 'react' 
/**props 예제 1 (함수형 컴포넌트)
 * 
 * @param {*} props : 부모 -> 자식 컴포넌트로 데이터 전달 시 사용하는 "객체"
 * JS 객체 형식이라는 뜻!! (k:v 형태로 돼있다는 뜻!) 
 */
const PropsEx1 = (props)=>{ //함수형 컴포넌트 정의

    //부모 컴포넌트로부터 전달 받은 데이터 확인하기
    console.log('PropsEx1 : ', props);
    return(
        //원하는 컴포넌트 작성
        <> {/* fragment (여러 조각을 하나로 묶어주는 것) */}
        <h3>PropsEx1 확인</h3>
        {/* js값이나 코드를 랜더링 되는 html 내부에 사용할 땐 
        {}안에 작성하면 된다 */}
        <ul>
            <li>번호 : {props.num}</li>
            {/* props에서 num이라는 값을 보여주겠다. */}
            <li>이름 : {props.name}</li>
            <li>나이 : {props.age}세</li>
            <li>점수 : {props.score}점</li>
        </ul>
        </>
    );
};
export default PropsEx1;










