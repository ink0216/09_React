import React, {createContext} from 'react'; //Context 생성 구문을 얻어와서 사용하겠다.

/* Context(값(공통적으로 제공해서 쓸 수 있는 값), 설정을 저장하는 공간) 객체 생성 */
const UserContext = createContext();

//외부에서 import시, 내보내 줄 기본 값을 UserContext로 설정
export default UserContext;


















