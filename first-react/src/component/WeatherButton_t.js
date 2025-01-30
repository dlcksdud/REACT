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

const WeatherButton = ({cities}) => {  
    console.log("cities ? ", cities);
  

  return (
    <div>
        <Button variant="warning">Current Location</Button>
        {/** Array 함수 : 리액트에서 배열을 UI에 프린트할 때 많이 쓰임
         * 영상 자료 : https://youtu.be/kLYdgg0ljTk
        */
            cities.map((item) => (
                <Button variant='warning'>{item}</Button>
            ))
        }
    </div>
  )
}

export {WeatherButton}
