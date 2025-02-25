# Netflix Project
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
    </Navbar>
    <Outlet></Outlet>
</div>
```
