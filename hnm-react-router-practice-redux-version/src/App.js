import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductAllPage from './Page/ProductAllPage';
import LoginPage from './Page/LoginPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {
  

  return (
    <div>
      <Navbar /> {/**navigation bar 만들기 : route 화면은 바뀌어도 navbar는 유지 */}
      <Routes>
        <Route path="/" element={<ProductAllPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/product/:id" element={<PrivateRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
