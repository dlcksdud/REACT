# React Study Project

### 강의:
- **인프런**: [코딩알려주는 누나](https://www.inflearn.com/course/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A7%88%EC%A7%80%EB%A7%89/dashboard)

### 사용 언어:
- **JavaScript**
- **HTML**
- **React**

### 계획:
1. React 강의 수강 후 현재 repository를 완성하기
2. [reactive-board repository](https://github.com/dlcksdud/reactive-board)의 HTML, JS로 이루어진 front-end를 React로 업그레이드하기



# React lifecycle (class component ver.)
![React lifecycle](./react_lifecycle.jpeg)

React 컴포넌트는 다음 세 가지 주요 단계로 나뉩니다:
1. Mounting (컴포넌트 시작)
2. Updating (컴포넌트 업데이트)
3. Unmounting (컴포넌트 종료)

---

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

## 3. Unmounting: component가 종료될 때 실행

### 3.1 **componentWillUnmount**
- component 종료시 실행되는 함수







