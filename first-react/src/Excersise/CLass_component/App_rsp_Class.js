/**가위바위보 게임 class component로 바꾸기 */
import React, { Component } from 'react'
import './Excersise/RspGameProject/App_rsp_game_t.css';
import Box from "../../component/Class_coponent/GameBoxClass.js";

const choice = {
    rock: {
      name: "Rock",
      img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
    },
    scissors: {
      name: "Scissors",
      img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
    },
    paper: {
      name: "Paper",
      img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    },
};

export default class App_rsp_Class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        }
    }

    play = (userChoice) => {
        // this.setState({userSelect: choice[userChoice]});
        // let computerChoice = randomChoice();
        // this.setState({computerSelect: computerChoice});
        // this.setState({result: judgement(choice[userChoice], computerChoice)});
        const userSelection = choice[userChoice];
        const computerSelection = this.randomChoice();
        const gameResult = this.judgement(userSelection, computerSelection);

        this.setState({
            userSelect: userSelection,
            computerSelect: computerSelection,
            result: gameResult,
        });
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
        console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        console.log("random value", randomItem);
        let final = itemArray[randomItem];
        return choice[final];
    };

    judgement = (user, computer) => {
        if (user.name == computer.name) {
            return "tie";
          } else if (user.name == "Rock")
            return computer.name == "Scissors" ? "win" : "lose";
          else if (user.name == "Scissors")
            return computer.name == "Paper" ? "win" : "lose";
          else if (user.name == "Paper")
            return computer.name == "Rock" ? "win" : "lose";
    };

    
    

  render() {
    return (
      <div>
        <div className="main">
            <Box title="You" item={this.state.userSelect} result={this.state.result} />
            <Box title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>
            <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
