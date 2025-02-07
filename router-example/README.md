# React Router

[React Router 링크](https://reactrouter.com/)
- react router v5, v6는 문법 차이가 꽤 있다.

## 사용법
``` shellscript
$ npm install react-router-dom@6
```

- index.js에서 아래와 같이 import 해주고 BrowserRouter로 감싸준다.
``` javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

- App.js에서 아래와 같이 해준다.
``` javascript
import {Routes, Route, Link} from "react-router-dom";

// 중략
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
```

## useNavigate
```javascript
import {useNavigate} from 'react-router-dom';

// 중략
const navigate = useNavigate();

  const goToHomePage=()=> {
      navigate('/')
  };
// 하략
<button onClick={goToHomePage}>Go to Homepage</button>
```

## url 디자인 : RESTful Routes
![RESTful Routes](./restfuleRoutes.png)
- url 디자인 패턴
- HTTP Verb : Get, Post, Put, Delete
- :(colon) : parameter 값, 가변적인 값
- parameter값 받는 법 (useParams)
```javascript
import { useParams } from 'react-router-dom'
// 중략
const params = useParams();
// 생략한 버전
const {id} = useParams();
```

## useSearchParams
```javascript
import { useSearchParams } from 'react-router-dom'
// 중략
let [query, setQuery] = useSearchParams();
console.log(query.get('q'));
```

## 보호해야 하는 페이지 : Redirect
- 로그인 여부에 따라 보호해야 할 페이지에 사용 (Navigate)
- Navigate와 useNavigate는 다름

```javascript
import {Navigate} from "react-router-dom";
// 중략
const [authenticate, setAuthenticate] = useState(false);

// 컴포넌트는 첫글자가 대문자
const PrivateRoute =()=>{
// 보호할 페이지는 UserPage.js
// 상황 가정 : authenticate는 로그인 여부
return authenticate == true ? <UserPage/> : <Navigate to="/login"/>
}
```