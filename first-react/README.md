# React lifecycle (class component ver.)
![React lifecycle](./react_lifecycle.jpeg)

React 컴포넌트는 다음 세 가지 주요 단계로 나뉩니다:
1. Mounting (컴포넌트 시작)
2. Updating (컴포넌트 업데이트)
3. Unmounting (컴포넌트 종료)



## 1. Mounting: 컴포넌트가 시작될 때 실행
Mounting은 컴포넌트가 생성되고 DOM에 추가되는 과정입니다.

### 1.1 **constructor**
- 첫 번째로 실행되는 라이프사이클 함수.
- 컴포넌트가 실행될 때 가장 먼저 호출됩니다.
- 앱 실행 시 필요한 초기 작업들을 수행합니다.

```javascript
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  };
}
```

### 1.2 **getDerivedStateFromProps**
- state와 props를 동기화시켜주는 작업

### 1.3 **render**
- UI 그려주는 함수

### 1.4 **componentDidMount**
- UI가 setting이 다 되었을 때 알려주는 함수

## 2. Updating:  state가 업데이트되고 ui 업데이트 될 때 실행

### 2.1 **componentDidUpdate**
- state가 update가 됐는지 알려주는 함수, 최신 업데이트 된 값을 받아볼 수 있음
- function component에서는 useEffect의 []가 대신한다.
  ```javascript
    /**
   * function component lifecycle
   * class component에서 componentDidMount 작업 수행
   * reder 후에 실행됨
   * useEffect(() => {} , [])
   * 마지막 [] array의 쓰임 : array안에 state값을 넣으면 state가 업데이트 되면 알려줌
   */
  useEffect(() => {
    console.log("useEffect1 Fire!!!");
  }, [])

  useEffect(() => {
    console.log("useEffect2 fire!!!!");
  }, [counter2]); // counter2의 값이 udpate될 떄마다 호출됨

  // [] 빈 array에서는 componentDidMount처럼 작동
  // [conter2, value] 처럼 state값을 넣으면 componentDidUpdate의 기능도 동시에 한다.
  ```

## 3. Unmounting: component가 종료될 때 실행

### 3.1 **componentWillUnmount**
- component 종료시 실행되는 함수