# Netflix Project (Latest Version)
- TMDB api 사용
[https://www.themoviedb.org](https://developer.themoviedb.org/docs/getting-started)
- 버전 v3사용
- 회원가입 후 API 키 얻어야 함
- header에 api 넣을 예정
- api키 앞의 `Bearer`은 OAuth 토큰을 이용하는 경우 많이 쓰는 패턴

- 설치한 것들
    - `npm i react-dom react-router-dom`
    - `npm i react-bootstrap bootstrap`
    - `npm i axios`
    - `npm i @tanstack/react-query @tanstack/react-query-devtools`


### API_KEY 숨기기
- 프로젝트 루트에 `.env` 만들어서 `REACT_APP_API_KEY` 저장 : 프리픽스 `REACT_APP_` 필수
- `.gitignore`에 `.env` 설정
```javascript
const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);
```

### 라우터 설정
```jsx
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}> {/**페이지마다 다른 navbar 설정할 경우 */}
          <Route index element={<Homepage />}></Route> {/*index : 위의 path를 그대로 쓰겠다는 의미*/}
          {/* <Route path='/movies' element={<MoviePage />}></Route>
          <Route path='/movies/:id' element={<MovieDetailPage />}></Route> */}
          <Route path='movies'>
            {/**서브 라우트 */}
            <Route index element={<MoviePage />}></Route>
            <Route path=':id' element={<MovieDetailPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
```

### Outlet 
- react-router-dom에서 제공하는 기능
- react-router안에 있는 자손들을 갖고 올 때 도와주는 컴포넌트 
```javascript
<div>
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar-self'>
    {/*생략*/}
    </Navbar>
    <Outlet></Outlet>
</div>
```

### axios Instance
[https://axios-http.com/kr/docs/instance](https://axios-http.com/kr/docs/instance)
```javascript
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000, // 얼마나 응답값을 오래 기다릴지
  headers: {'X-Custom-Header': 'foobar'} // 헤더값 설정
});
```  
### axios Interceptor
[https://axios-http.com/kr/docs/interceptors](https://axios-http.com/kr/docs/interceptors)
```javascript
// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
});

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
});
```

## Step - Hompage
1. 배너 : popular movie의 첫번째 영화를 항상 띄울 수 있도록
2. popular movie
3. top rated movie
4. upcoming movie

## react multi carousel
- 슬라이드 만들기  
[https://www.npmjs.com/package/react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)
```shellscript
npm install react-multi-carousel --save
```
```javascript
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
```


