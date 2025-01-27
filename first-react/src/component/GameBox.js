import React from 'react'

const Game = (props) => {
  console.log("props : ", props);
  let result;
  if(props.name === "COMPUTER" && props.result !== "비김" && props.result !== null) {
    result = props.result === "win" ? "lose":"win";
  } else {
    result = props.result;
  }
  
  return (
    <div className='gameBox'>
      <h1>{props.name}</h1>

      {/**
       * const [userSelect, setUserSelect] = useState(null);
       * ERROR!!  GameBox.js:15 Uncaught TypeError: Cannot read properties of null (reading 'img')
       * 여기에서 처음 값은 null을 넘겨주기 때문에 null을 넘겨줄 때를 대비하여 
       * src={props.item && props.item.img}
       * props.item 이 null 이면 false가 리턴된다. 
       * && 연산자는 하나만 false여도 다 false
       * 
       * 따라서. props.item이 값이 있어야먄(null이 아니어야만) 출력됨
       */}
      {/* <img className='item-img' src={props.item && props.item.img}></img> */}
      <p className='item-img'>{props.item && props.item.img}</p>
      <h2>{result}</h2>
    </div>
  )
}

export default Game
