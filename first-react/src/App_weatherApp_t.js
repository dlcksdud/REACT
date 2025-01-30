import './App_weatherApp.css';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, CSSProperties } from 'react';
import axios from "axios"; // npm install axios
import WeatherBox from './component/WeatherAppProject/WeatherBox.js';
import {WeatherButton} from './component/WeatherAppProject/WeatherButton_t.js';
import { Button } from 'react-bootstrap';
// 로딩 스피너 : npm install --save react-spinners
import ClipLoader from "react-spinners/ClipLoader";


/**
 * [날씨앱 만들기]
 * 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
 * 2. 날씨정보에는 도시, 섭씨 화씨 , 날씨 상태
 * 3. 아래에는 5개의 버튼 : 1개는 현재위치, 나머지 4개는 다른 도시
 * 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
 * 5. 현재위치버튼(current location)을 누르면 다시 현재위치 기반의 날씨가 나온다.
 * 6. 데이터를 들고 오는 동안 로딩스피너가 돈다.
 * 6.1 로딩 스피너 : https://www.npmjs.com/package/react-spinners
 */
function App() {
  // 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
  const [weather, setWeather] = useState('');

  // array로 도시정보를 보낸 이유
  // 1. 도시 정보가 여러개일 때를 대비
  // 2. spelling 실수 방지
  const  cities = ['Paris', "Shanghai", 'Bangkok', 'New york'];
  const [city, setCity] = useState('');


  // 상황에 맞춰서 호출을 달리 해준다.
  useEffect(() => {
    if(city == "") {
        getCurrentLocation();
    } else {
        getWeatherByCity();
    }
  }, [city])

  // WeatherButton.js로 보낸 setCity가 잘 작동하는지 알아볼 방법
  // city state를 주시하고 있다가 바뀌면 useEffect가 호출된다.
//   useEffect(() => {
//     // console.log("city?", city);
//     getWeatherByCity();
// }, [city]);


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
        console.log("섭씨 : ", response.data.main.temp);
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

  const getWeatherByCity = () => {
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

  // 로딩스피너
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };


  return (
    <div>
        <div className='container'>
            <WeatherBox weather={weather}/>
            <Button onClick={() => getCurrentLocation()} variant="warning">Current Location</Button>
            <WeatherButton cities={cities} setCity={setCity}/>
        </div>

        <ClipLoader
          color="Blue"
          loading="true"
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
      />
    </div>
  );
}

export default App;
