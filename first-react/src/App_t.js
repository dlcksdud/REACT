import './App.css';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from "axios"; // npm install axios
import WeatherBox from './component/WeatherBox';
import {WeatherButton} from './component/WeatherButton_t.js';
import { Button } from 'react-bootstrap';


/**
 * [날씨앱 만들기]
 * 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
 * 2. 날씨정보에는 도시, 섭씨 화씨 , 날씨 상태
 * 3. 아래에는 5개의 버튼 : 1개는 현재위치, 나머지 4개는 다른 도시
 * 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
 * 5. 현재위치버튼(current location)을 누르면 다시 현재위치 기반의 날씨가 나온다.
 * 6. 데이터를 들고 오는 동안 로딩스피너가 돈다.
 */
function App() {
  // 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
  const [weather, setWeather] = useState('');

  // array로 도시정보를 보낸 이유
  // 1. 도시 정보가 여러개일 때를 대비
  // 2. spelling 실수 방지
  const  cities = ['Paris', "Shanghai", 'Bangkok', 'New york'];


  useEffect(() => {
    getCurrentLocation();
  }, [])

  const getCurrentLocation= () => {
    console.log("getCureentLocation");
    // 현재위치 가져오기(위도, 경도): js의 navigator 사용
    // https://www.w3schools.com/html/html5_geolocation.asp
    navigator.geolocation.getCurrentPosition((position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("현위치 : ",latitude, longitude);
        // 현재위치의 날씨 가져오기
        getCurrentLocationWeather(latitude, longitude);
    });
  }

  // 날씨 api 이용 : UseWeatherAPI.md 참고
  const getCurrentLocationWeather = (latitude, longitude) => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // &units=metric 붙이면 섭씨온도 출력 가능
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e8c53d0373070c7d2fc6f2a23d108dbb&units=metric`)
    .then((response) => {
        console.log("response : ", response);
        console.log("도시명 : ", response.data.name);
        console.log("구름 : ", response.data.weather[0].description);
        console.log("화씨 : ", response.data.main.temp);
        setWeather(response.data);
        // setCity(response.data.name);
        // setCloud(response.data.weather[0].description);
        // setTempF((response.data.main.temp * 9/5) + 32).toFixed(1);
        // setTempC(response.data.main.temp);
    })
    .catch((error) => {
        console.log("error : ", error);
    });
  };

  // 같은 api를 네번이나 호출하면 이거를 줄여볼 수있을까?
  // 위도와 경도만 넣으면 되는데..
  // 같은 function을 호출하면서 위도와 경도만 다르게? 넣어서?
  const getSelectLocationWeather = (city) => {
    console.log("city?? ", city);
    //https://api.openweathermap.org/data/2.5/weather?q=Bangkok,TH&appid=YOUR_API_KEY
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8c53d0373070c7d2fc6f2a23d108dbb&units=metric`)
    .then((response) => {
        console.log("response.data : ", response.data);
        console.log("도시명 : ", response.data.name);
        console.log("구름 : ", response.data.weather[0].description);
        console.log("섭씨 : ", response.data.main.temp);
        setWeather(response.data);

    })
    .catch((error) => {
        console.log("error : ", error);
    });
    
  }


  return (
    <div>
        <div className='container'>
            <WeatherBox weather={weather}/>
            {/* <div className='weather-btn'>
                <Button onClick={() => getCurrentLocation()} variant="warning">Current Location</Button>
                <WeatherButton onClick={() => getSelectLocationWeather("Paris")} city={"Paris"}></WeatherButton>
                <WeatherButton onClick={() => getSelectLocationWeather("Shanghai")} city={"Shanghai"}></WeatherButton>
                <WeatherButton onClick={() => getSelectLocationWeather("Bangkok")} city={"Bangkok"}></WeatherButton>
                <WeatherButton onClick={() => getSelectLocationWeather("New york")} city={"New york"}></WeatherButton>
            </div> */}
            <WeatherButton cities={cities}/>
        </div>
    </div>
  );
}

export default App;
