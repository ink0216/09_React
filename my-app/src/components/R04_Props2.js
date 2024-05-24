//컴포넌트용 js를 만들거라면 무조건 react import받아와야한다
import React from 'react'
const PropsEx2 = (props) =>{
    // props : 부모 컴포넌트로부터 전달 받은 값을 담은 객체
    // props 값은 자식 컴포넌트에서 변경이 불가능하다!!
    // js객체 형태로 넘어온다.

    //JS 변수 선언/초기화 방법 중 하나
    const {name,age,gender} = props; //JS에서의 변수 선언 방법 중 하나
    /*만약 props 객체에 
    props{
        "name" : "홍길동",
        "age" : 12
    }
    였을 경우
    key : name, age임
    저 값을 꺼낼려면 props.name라고 해야 하는데 
    
    위처럼 하면
    우변(props) 객체의 key 값이 
    좌변에 작성된 변수명과 같다면 자동으로 대입이 된다!!

    name이라는 변수를 좌변에 선언했는데 우변의 props에 해당 key가 있다면 자동으로 그 값이 좌변에 대입된다.

    객체가 너무 클 때 사용하기도 함
     */
    return(
        <div className='info'> {/* 리액트에서는 클래스를 className으로 줘야 한다. */}
            이름 : {name} / 나이 : {age} / 성별 : {gender}
        </div>
    );
}
export default PropsEx2;