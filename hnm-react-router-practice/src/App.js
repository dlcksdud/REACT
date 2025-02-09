import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAllPage from './Page/ProductAllPage';
import LoginPage from './Page/LoginPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]) // authenticate값이 바뀔 때 마다.

  console.log("APP.js !!! searchWord : ", searchWord);

  return (
    <div>
      <Navbar setSearchWord={setSearchWord}/> {/**navigation bar 만들기 : route 화면은 바뀌어도 navbar는 유지 */}
      <Routes>
        <Route path="/" element={<ProductAllPage searchWord={searchWord}/>}></Route>
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/>}></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
