import './App.css';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [level, setLevel] = useState(0);
  const dispatch = useDispatch();

  const levelUp = () => {
    dispatch({type: "INCREMENT"})
    setLevel(level + 1);
  }

  return (
    <div>
      <h1>{level}</h1>
      <button onClick={levelUp}>level up!</button>
    </div>
  );
}

export default App;
