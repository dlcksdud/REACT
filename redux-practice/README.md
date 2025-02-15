# Redux
- react가 쓸 수 있는 라이브러리 중 하나
- redux는 필수사항은 아니지만 없으면 매우 불편하다.
- 매우 어려움 주의

- redux를 만든 이유?
![react와 redux의 차이 이미지](./Redux.png)
- react의 불편한 점 : react는 한방향 소통만 가능해서 자식 컴포넌트 끼리는 state공유가 불가하다.
- redux는 store라는 저장소에 state를 저장해 준다. 

- redux를 어려워 하는 이유? 컴포넌트가 store의 값을 바로 바꾸거나 요청하지 못한다.
![redux의 cycle](./redux_cycle.png)  

ex) 로그인
- action : 로그인 하기
- reducer : 작업지시 리스트 중에서 골라서 작업 -> store의 값을 바꿔줌
- store : object 타입이라고 보면 됨

- react hook
    - useDispatch : action을 던지는 hook
    - useSelector : store의 값을 가져와서 쓸 때 사용

[Redux 홈페이지](https://redux.js.org/)
```shell script
npm install redux
```

# React-Redux
- [React-Reduc 링크](https://react-redux.js.org/)
- redux와 별개로 redux가 react에서 잘 쓰이기 위해 필요한 함수들을 모아놓은 package
```shell script
npm install react-redux
```

- `<Provider />` : the Redux store available to the rest of your app, index.js에 적용
```javascript
// 생략
import { Provider } from 'react-redux'
import store from './store'
// 생략

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```  
- createstore : 현재 deprecated 되어있음, configurestore 쓰는 걸 추천하고 있다.
    - configurestore의 동작원리를 정확히 이해하기 위해서 먼저 알기를 추천.

### useDispatch
```javascript
import { useDispatch } from 'react-redux';
// 생략
 const dispatch = useDispatch();
```  
- Action은 단순한 Object(객체)이다.
- dispatch에 Action을 넘겨야 하는데 방법은
```javascript
const dispatch = useDispatch();
// type: action의 이름
// payload : 함수의 매개변수 같은 느낌, 필요한 정보를 보내줄 수 있음
dispatch({type: "INCREMENT", payload:{num: 5}})
```  
- reducer는 자동으로 dispatch가 던진 action을 받아올 수 있음
- reducer 기본 구조  
```javascript
let initialState = {
    level:0
}

function reducer(state=initialState, action) {
    console.log("Action은 뭘까?", action);
    //{type: '@@redux/INITf.1.9.1.f.9'}type: "@@redux/INITf.1.9.1.f.9"[[Prototype]]: Object

    // if문, switch문 등 회사에 따라 사용방법은 다름.
    if(action.type === "INCREMENT") {
        return {
            // store는 reducer의 return값을 적용한다.
            // ...state인 이유 : (만약 state가 여러개이면) 다른 state값은 유지하되, count만 바꾼다는 의미
            // ...spread문법을 통해서 기존 객체 내용을 복사해 새로운 객체에 전달 가능
            ...state, level: state.level + 1
        };
    }
    // store는 return값 필수
    return {...state};
}

export default reducer;
```  

### useSelector
- state값 가져와서 쓰고 싶으면 useSelector  
```javascript
import { useSelector } from 'react-redux';
// 생략
 const level = useSelector(state => state.level);
// 생략
<h1>{level}</h1>
```