import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"; // npm install axios
import WeatherBox from './component/WeatherBox';

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
  const [city, setCity] = useState("");
  const [cloud, setCloud] = useState("");
  const [tempF, setTempF] = useState("");
  const [tempC, setTempC] = useState("");

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
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e8c53d0373070c7d2fc6f2a23d108dbb`)
    .then((response) => {
        console.log("response : ", response);
        console.log("도시명 : ", response.data.name);
        console.log("구름 : ", response.data.weather[0].description);
        console.log("화씨 : ", response.data.main.temp);
        setCity(response.data.name);
        setCloud(response.data.weather[0].description);
        setTempF(response.data.main.temp / 10);
        setTempC(((tempF - 32) * 5 / 9).toFixed(1));
    })
    .catch((error) => {
        console.log("error : ", error);
    });
  };

  return (
    <div>
        <WeatherBox/>
     
    </div>
  );
}

export default App;
