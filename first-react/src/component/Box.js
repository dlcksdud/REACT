// 단축키 rafce
// reactArrowfunctionExportComponent
// 단축키 사용하기 위해서 extension ES7 React/Redux/GraphQL/React-Native snippets 설치함


import React from 'react'

const Box = (props) => {
    console.log("props : ", props);
    // props :  {name: '리사'}name: "리사"[[Prototype]]: Object
    // props를 사용하면 dynamic한 값을 box에 전달할 수 있다.
    return (
        <div className='box'>
            Box{props.num}
            <p>{props.name}</p>
        </div>

    )
}

export default Box