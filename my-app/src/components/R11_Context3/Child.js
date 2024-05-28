import React, {useState //리랜더링
    , useContext //전역변수인 Context객체를 여기서 사용할거다
} from 'react';

/* 사용할 외부 Context객체를 import하기 */
import UserContext from './UserContext';

/* 자식 컴포넌트 정의 */
const Child = ()=>{

    /* Context를 이용해 제공 받은 값 얻어오기 */
    //Parent에서 Provider를 이용해서 그 안의 것들에게 객체를 제공해줬었다.
    // useContext(UserContext) // == {"userList" : userList, "setUserList" : setUserList} == Context로 전달 받은 객체
    const {userList, setUserList} = useContext(UserContext)
    //객체 형태로 변수 선언 가능 -> 전달 받은 객체의 key값과 같게 해주면 key에 해당하는 value값을 알아서 꺼내와서
    //변수에 값으로 넣어준다.
    //객체의 key값과 변수명을 똑같이 작성하여 값이 알아서 대입 되도록 함

    /* 자식 컴포넌트의 상태 변수 선언(자식을 리랜더링 시켜줄 함수) */
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState(''); //모두 빈칸으로 초기화

    /* 이벤트 핸들러(이벤트가 발생했을 때 수행할 함수) 만들기*/
    //이따 Child 밑에 추가 버튼 만들건데 추가 버튼 클릭 시
    //입력된 이름, 나이를 userList에 추가하는 구문을 만들거다
    const addUser = ()=>{

        //상태 변수 값을 이용해 user 객체 생성
        const user = {"name" : inputName, "age" : inputAge}
        //key값은 무조건 String이라서 ""굳이 안적어도 되는데 헷갈리니 써놓자

        
        //빈 배열 상태이다.
        //만약 그 안에 User 객체 하나가 들어있었다면? 예시로 ,, [{name : "a", age : 1 }] (배열 안에 객체 1개 들어있음)

        //리액트에서는 push 이런거 안쓰고 다르게 쓴다.
        /* const arr = [1,2,3,4,5]
        ...은 대괄호 벗기는거다
        ...arr = 1,2,3,4,5
        [...arr,6,7,8] == [1,2,3,4,5,6,7,8] (기존 배열 복사 + 추가)
        */

        //userList를 깊은 복사
        const newUserList = [...userList, user]; //userList는 Context로 제공받은거다(useContext)
        //얕은 복사 == 주소만 복사(두 변수가 하나의 객체를 참조)
        //깊은 복사 == 원본과 주소가 다른 새 객체를 복제
        setUserList(newUserList); // 부모 상태 변수 userList를 변경하는 함수를 이용해
                                    //newUserList를 세팅 -> 부모 컴포넌트 리랜더링이 진행된다.
                                    //자식 쪽에서 이벤트 핸들러가 동작할 떄마다 부모가 리랜더링된다(상태 끌어올리기)
        //userList.push(user) //userList는 상태변수여서 꼭 setUserList를 이용해야만 값을 바꿀 수 있다. ->push로 해도 안된다!!!!!!

        //자식 컴포넌트 상태 변수 값을 빈칸으로 초기화
        setInputAge('');
        setInputName('');

        //이벤트 핸들러 완성!!
        //자식 상태변수값을 얻어와서 객체를 만들어서 부모 상태변수에 세팅해주고 자식 값은 다 초기화시켜주는 구문!!

    }
    return( //반복문이랑 이름 겹쳐서 htmlFor이라고 했다.
        <div>
            <label htmlFor='id'>이름 : </label>
            <input type='text' id='id' onChange={(e)=>{setInputName(e.target.value)}}
                                    value = {inputName}/>
            {/* 값이 바뀔 떄 마다 함수를 실행하겠다. */}

            <br/>
            <label htmlFor='age'>나이 : </label>
            <input type='number' id='age' onChange={(e)=>{setInputAge(e.target.value)}}
                                    value = {inputAge}/>
            {/* 값이 바뀔 떄 마다 함수를 실행하겠다. */}
            <button onClick = {addUser}>추가</button>
        </div>
    );

}
export default Child;











