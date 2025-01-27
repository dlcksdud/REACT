import './App_rsp_game.css';
import Game from '../component/GameBox';
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
  // 내가 선택한 값을 보여주기 위한 state
  const [userSelect, setUserSelect] = useState(null);
 // 컴퓨터가 랜덤한 값을 선택한 걸 보여주기 위한 state
  const [computerSelect, setComputerSelect] = useState(null);
 // 컴퓨터vs나 대결 결과
  // const [userResult, setUserResult] = useState(null);
  // const [computerResult, setComputerResult] = useState(null);
  const [result, setResult] = useState("");
 
  const play =(userChoice)=> {
    console.log("선택됨 ", userChoice);
 
    /**
     * UI를 그려줄 때 함수를 실행시켜 버리기 때문에 클릭하기 전부터 함수가 실행됨
     * 따라서 <button onClick={play("rock")}>바위</button>에서
     * onClick={() => play("rock")} 으로 콜백함수로 처리해줘야 한다.
     */ 
    
    setUserSelect(choice[String(userChoice)]);  
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

  
    // 결과 출력
    /**
     * 나의 생각..
     * 0(바위),1(가위),2(보)의 배열로 choice를 만들 수 있으니
     * 
     */
    // let itemArray = Object.keys(choice);
    // console.log("userChoice!!!!!!!!!!!!!!! ", userChoice);
    //   console.log("computerChoice!!!!!!!!!!!!", computerChoice);
    // // userChoice == itemArray[0] && computerChoice == itemArray[1] ? setUserResult("WIN") : setComputerResult("LOSE");
    // if(userChoice == computerChoice) {
    //     setUserResult("비김");
    //     setComputerResult("비김");
    // } else if(userChoice != computerChoice) {
    //     /**
    //      * 경우의 수..
    //      * 바위 보
    //      * 바위 가위
    //      * 가위 보
    //      * 가위 바위
    //      * 보 바위
    //      * 보 가위
    //      */
    // }

    /**
     * 선생님 코드
     */
    setResult(judgement(choice[String(userChoice)], computerChoice));    
    console.log("오류!!!!!!!!!!!! ", choice[String(userChoice)]);
  }

  const judgement = (user, computer) => {
    console.log("**********", user.name, computer.name);
    /**
     * 선생님 코드
     */
    if(user.name == computer.name) {
      return "비김";
    } else if(user.name == "Rock") return computer.name="Scissors"? "win":"lose"
      else if(user.name == "Scissors") return computer.name == "Paper"? "win":"lose"  
      else if(user.name == "Paper") return computer.name =="Rock"? "win":"lose"

    /**
     * 내 코드
     */
    // if(user.name == computer.name) {
    //     setUserResult("비김");
    //     setComputerResult("비김");
    // } else if(user.name != computer.name) {
    //     /**
    //      * 경우의 수..
    //      * 바위 보 
    //      * 바위 가위
    //      * 가위 보
    //      * 가위 바위
    //      * 보 바위
    //      * 보 가위
    //      */
    //     // 1. 나 바위, 컴 보 일떄
    //     if(user.name == "Rock") {
    //       if(computer.name == "Scissors") {setUserResult("이겼다."); setComputerResult("졌다.");}
    //       if(computer.name == "Paper") {setUserResult("졌다."); setComputerResult("이겼다.");}
    //     } else if(user.nameser == "Scissors") {
    //       if(computer.name == "Paper") {setUserResult("이겼다."); setComputerResult("졌다.");}
    //       if(computer.name == "Rock") {setUserResult("졌다."); setComputerResult("이겼다.");}
    //     } else {
    //       if(computer.name == "Rock") {setUserResult("이겼다."); setComputerResult("졌다.");}
    //       if(computer.name == "Scissors") {setUserResult("졌다."); setComputerResult("이겼다.");}
    //     }
    // }
  }

  const randomChoice =() => {
    /**
     * 컴퓨터에서 랜덤으로 받아오는것
     * math.random() 으로 랜덤한 숫자를 받아 올 수 있다.
     * 0~1 사이의 랜덤값을 반환한다.
     * 아이템과 숫자를 연결짓는 방법 : 배열
     */
    /**
     * 내가 한 방법
     * let randomItem = Math.round(Math.random() * 2);  // 0~2까지의 랜덤한 숫자 반환
        console.log(randomItem);
        randomItem == 0?setComputerSelect(choice.rock):randomItem == 1?setComputerSelect(choice.scissors):setComputerSelect(choice.paper);
     */

    /**
     * 선생님이 한 방법
     * choice객체를 배열화 시킴
     * Object.keys() 함수 : 객체의 키값만 뽑아서 array로 만들어주는 함수
     * Math.floor() 함소 : 소수점 아래의 수는 버림
     */
    let itemArray = Object.keys(choice);
    // console.log(itemArray); //['rock', 'scissors', 'paper']
    let randomItem = Math.floor(Math.random() * itemArray.length); 
    // console.log(randomItem);
    let final = itemArray[randomItem];
    // console.log(final);
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Game name="ME" item={userSelect} result={result}></Game>
        <Game name="COMPUTER" item={computerSelect} result={result}></Game>

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
