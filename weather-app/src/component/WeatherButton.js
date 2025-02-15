import React from 'react'
import { Button } from 'react-bootstrap';


/**
 * React Bootstrap 사용하기
 * https://react-bootstrap.netlify.app/
 * npm install react-bootstrap bootstrap
 * import { Button } from 'react-bootstrap';
 * css 쓸 파일에도 import 'bootstrap/dist/css/bootstrap.min.css';
 * 
 * 사이트 component 카테고리에서 골라 쓸 수 있다.
 */

const WeatherButton = (props) => {  

  

  return (
    <div>
        <Button onClick={props.onClick} city={props.city} variant="warning">{props.city}</Button>
    </div>
  )
}

export {WeatherButton}
