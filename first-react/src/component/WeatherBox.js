import React from 'react'

/**
 * js(ES6)
 * Destructuring
 * : object에서 갖고 오고 싶은 내용의 key만 뽑아올 수 있다.
 * 
 */
const WeatherBox = ({weather}) => {
  console.log("weather ? ", weather);

  let tempC = weather?.main?.temp;
  let tempF = ((tempC * 9/5) + 32).toFixed(1);
  let skyStatus = weather?.weather?.[0].description;

  return (
    <div className='weather-box'>
      {/**weather가 렌더링 될 때 null 값을 처리하기 위해서 조건부 랜더링 */}
      <div>{weather?.name}</div>
      <h2>{tempC}&deg;C / {tempF}&deg;F</h2>
      <h3>{skyStatus}</h3>
    </div>
  )
}

export default WeatherBox
