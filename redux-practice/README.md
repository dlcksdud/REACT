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