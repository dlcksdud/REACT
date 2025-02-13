import './App.css';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  // const [level, setLevel] = useState(0);
  const level = useSelector(state => state.level);
  const dispatch = useDispatch();

  let id = useSelector(state => state.id);
  let pw = useSelector(state => state.pw);

  // type: action의 이름
  // payload : 함수의 매개변수 같은 느낌, 필요한 정보를 보내줄 수 있음
  const levelUp = () => {
    dispatch({
      type: "INCREMENT", 
      payload:{num: 5}})
    // setLevel(level + 1);
  }

  const levelDown = () => {
    dispatch({
      type: "DECREMENT",
      payload:{num: 2} // payload에서 넘긴 숫자만큼 감소
    })
  }

  const login =() => {
    dispatch({
      type: "LOGIN", 
      payload:{id: "찬영", pw: "123"}});
  }

  return (
    <div>
      <h1>{level}</h1>
      <h1>아이디 : {id} , 비밀번호: {pw}</h1>
      <button onClick={levelUp}>level up!</button>
      <button onClick={login}>로그인</button>
      <button onClick={levelDown}>감소시키기(숙제)</button>
      <Box />
    </div>
  );
}

export default App;
