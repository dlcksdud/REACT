import './App.css';
import Game from './component/GameBox';
import Rsp from './component/RspComponent.js';
import { useState } from 'react';

/**
 * <랜덤 가위바위보 게임 만들기>
 * 1. 박스 2개 (타이틀(나, 너), 사진정보, 결과값)
 * 2. 가위 바위 보 버튼
 * 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
 * 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
 * 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
 * 6. 승패에 따라 박스 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검은색)
 */

const choice = {
  rock: {
    name: "Rock",
    img: "바위이미지"
  },
  scissors: {
    name: "Scissors",
    img: "가위이미지"
  },
  paper: {
    name: "Paper",
    img : "보 이미지"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  // const [boxBorderColor, setBoxBorderColor] = useState("");

  // const rspState = (param) => {
  //     console.log("param ? ", param);
  //     setRsp(param);
  // }

  const play =(userChoice)=> {
    console.log("선택됨 ", userChoice);
    /**
     * UI를 그려줄 때 함수를 실행시켜 버리기 때문에 클릭하기 전부터 함수가 실행됨
     * 따라서 <button onClick={play("rock")}>바위</button>에서
     * onClick={() => play("rock")} 으로 콜백함수로 처리해줘야 한다.
     */ 
    setUserSelect(choice[userChoice]);


  }
  return (
    <div>
      <div className='main'>
        <Game name="ME" item={userSelect}></Game>
        {/* <Game name="COMPUTER" item={userSelect}></Game> */}

      </div>
      <div className='main'>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>   
    </div>
  );
}


export default App
