import React, { Component } from 'react'




export default class GameBoxClass extends Component {


  render() {

    let result;
    if (
        this.props.title === "Computer" &&
        this.props.result !== "tie" &&
        this.props.result !== ""
    ) {
        // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
        result = this.props.result === "win" ? "lose" : "win";
    } else {
        // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
        result = this.props.result;
    };

    if (this.props.title === "Computer") {
    console.log("computer", result);
    }

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">{this.props.item && this.props.item.name}</h2>
        <img className="item-img" src={this.props.item && this.props.item.img} />
        <h2>{result}</h2>
      </div>
    )
  }
}
