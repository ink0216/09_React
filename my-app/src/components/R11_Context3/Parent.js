import React, {useState //컴포넌트의 상태값 바꿀 수 있는 것

} from 'react';
//UserContext를 import해올거다
//import 이름 from 경로
// . == 현재 폴더
//외부 Context 객체 import
import UserContext from './UserContext';
//여기에서 만든 게 아니어서 createContext는 import를 안했다.

//외부 자식 컴포넌트 import
import Child from './Child';

//부모 컴포넌트 정의
const Parent = ()=>{
    const [userList, setUserList] = useState([]); //자식에서 만든 user가 이제 여기에 쌓여나갈거다.
    //배열이랑 가장 친한게 반복문이다
    //반복문을 이용해서 출력해줄거다
    //리액트에서는 그냥 for문은 잘 안쓴다
    //map이라는 것을 많이 쓴다!!!!

    //배열.map((요소, index) => {return 가공한 값;})
    // 배열의 각 요소의 값을 순서대로 하나씩 얻어와 가공한 후
    //return을 하면 -> return된 값들을 모아 새로운 배열을 최종적으로 반환시켜준다.
    //JS할 때 한 적 있다.
    //const arr = [1,2,3,4,5]
    // arr.map((item,index)=>{
//  console.log(index,item);
//  return item*2;
    //})
    //arr이 다섯 칸 짜리여서 이것도 다섯 칸이 반환된다.
    // [2,4,6,8,10] 배열이 반환된다



    //상태 변수 userList를 선언
    //초기값은 비어있는 배열([])로 초기화!!!
    //그러니까 userList는 배열이라는 뜻!!!!
    return(
        /* 하위 컴포넌트에게 
            {"userList" : userList, "setUserList" : setUserList}
            객체를 Context를 이용해 제공한다는 뜻!!!!
            부모의 상태 변수를 바꿀 수 있는 함수를
            //객체는 원래 k:v로 써야 하는데 key값만 써도 같은 값으로 value가 자동으로 생성된다(리액트에서만)
        */
        <UserContext.Provider value = {{userList, setUserList}}>
            {/* Child 호출하기 전에 어디서든지 부모의 것 쓸 수 있게 전달해줬다. */}
            <Child/> {/* 하위컴포넌트 호출해서 이 자리에 출력하겠다. */}
            <div>
                {/* Child에서 추가한 user 정보를 이 안에다 다 출력할거다 */}
                {/* js 쓸 떄마다 중괄호 써야 한다 html과 js 섞어쓰는 JSX */}
                {userList.map((user, index)=>{ //다 돌고나면 배열에 ul태그가 담겨있는 게 만들어진다.
                // 근데 화면에 출력될 때는 자동으로 대괄호 벗겨져서 ul태그로 잘 출력된다.
                    //리턴값 작성
                    return(
                        /* key 속성 : 배열을 반복 출력 시 요소를 구분하는 key를 등록해줘야한다
                            리액트가 가상 돔을 이용해서 리액트 특징이 화면 다시 만들 때 
                            순수 js는 a,b,c중 c만 변한 경우, a,b,c를 다 새로 만드는데
                            리액트는 변한 c만 다시 만들어줌
                            근데 이걸 a,b,c를 구분하는 key값이 안보이게 숨어있다.
                            그래서 그 key값을 우리가 임의로 등록해줘야 리액트가 각각의 요소를 구분한다.
                            이전의 것은 변하지 않고 바뀐 부분만 없어지고 새로 생긴다.
                        */
                        <ul key={index}>
                            {/* index로 key 설정해도 되지만, key값은 어렵게 만드는 것을 권장 */}
                            <li>index : {index}</li>
                            <li>name : {user.name}</li>
                            <li>age : {user.age}</li>
                        </ul>
                    );
                })}


            </div>

        </UserContext.Provider>
    );
}
export default Parent;