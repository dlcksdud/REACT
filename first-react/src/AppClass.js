// class component
// 단축어 rcc
// this. 으로 무조건 시작
/**
 * function component, class component

class component를 더 많이 사용하는 이유.
1. 많은 개발 문서들이 class 컴포넌트로 작성되었다.
2. 리액트에서 제공하는 lifecycle function 이 class컴포넌트에서만 동작이 돤다.
3. class 컴포넌트를 사용한 기간이 더 오래됨.
4. 2019년 이후 function 컴포넌트도 각광을 받음 -> lifecycle function을 제공하기 시작했기 때문
5. 지금은 리액트에서 function 컴포넌트를 더 사용할 것을 권장함

 */
import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    // consructure : class 생성 시 해주는 것
    constructor(props) {
        super(props)
        this.state={
            counter2: 0,
            num: 1,
            value: 0
        }
    }

    increase=() => {
        this.setState({counter2: this.state.counter2 + 1, value: this.state.value + 1});
    };
  render() {
    return (
      <div>
        {/**이 object 안에 있는 state를 가져오기 위해서 this.state를 써줘야 한다. */}
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭</button>
        <BoxClass num={this.state.value}></BoxClass>
      </div>
    )
  }
}
