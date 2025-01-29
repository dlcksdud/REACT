// import './App.css';
// State 사용하기'
// react에서 제공해주는유용한 함수들을 react hook이라고 한다.
// useEffect : function component에서 lifecycle역할을 하는 것.
import {useState, useEffect} from "react";

// 버튼을 클릭할 때마다 숫자가 증가하도록
// component의 장점 : js와 html을 한번에 쓸 수 있다는 것
/**
 * State
 * useState는 react hook 중의 하나
 * const [a, b] = useState(초기값);
 * a 는 초기값이 담긴 state
 * b 는 state값을 변경해주는 함수
 * UI에 보여줘야 하는 값은 state로 만들어야 한다.
 * 
 * state는 비동기적으로 실행된다. (중요)
 * 따라서 console.log("counter2 state = ", counter2); 는 함수가 실행되기 전 상태값을 나타냄
 * 
 * 변수는 re-render 될 때마다 초기화가 된다.(중요)
 */
function App() {
  let counter = 0;
  let value = 0;
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    // counter = counter + 1;
    // value = value + 2;
    // 함수가 끝날 때까지 기다렸다가 state바꾸는 함수들을 모아서 한번에 실행 -> 비동기적
    setCounter2(counter2 + 1);
    setCount(count + 2);

    /**
     * counter는 계속 1인 인유?
     * state 값을 바꾸는 순간에 컴포넌트가 re-rendering을 하는데 다시 처음부터 그리면서 counter를 0으로 초기화 시킴
     */
    console.log("counter = ", counter);
    console.log("counter2 state = ", counter2);

    /**
     * 1. user가 버튼을 클릭한다.
     * 2. counter + 1해서 1이됨
     * 3. setState함수 호출
     * 4. console.log 실행
     * 5. 변수값은 1, state값은 아직 안변해서 그 전의 값이 보임
     * 6. 함수 끝
     * 7. App이 다시 re-render
     * 8. let counter=0을 거치면서 counter값은 다시 0으로 초기화
     * 9. state값은 update 된다.
     */
  }

  /**
   * function component lifecycle
   * class component에서 componentDidMount 작업 수행
   * render 후에 실행됨
   * useEffect(() => {} , [])
   * 마지막 [] array의 쓰임 : array안에 state값을 넣으면 state가 업데이트 되면 알려줌
   */
  useEffect(() => {
    console.log("useEffect1 Fire!!!");
  }, [])

  useEffect(() => {
    console.log("useEffect2 fire!!!!", counter2, count);
  }, [counter2, count]); // counter2의 값이 udpate될 떄마다 호출됨

  return (
    <div>
      {console.log("render")}
      <div>{count}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
    
    
  );
}

export default App;
