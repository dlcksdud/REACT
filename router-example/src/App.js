
import './App.css';
import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import {Routes, Route, Navigate} from "react-router-dom";
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';


function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // 컴포넌트는 첫글자가 대문자
  const PrivateRoute =()=>{
    // 보호할 페이지는 UserPage.js
    // 상황 가정 : authenticate는 로그인 여부
    return authenticate == true ? <UserPage/> : <Navigate to="/login"/>
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        {/**RESTful Routes */}
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage/>}></Route>
        {/**보호해야할 페이지: UserPage.js */}
        <Route path='/user' element={<PrivateRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
