import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAllPage from './Page/ProductAllPage';
import LoginPage from './Page/LoginPage';
import ProductDetailPage from './Page/ProductDetailPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar /> {/**navigation bar 만들기 : route 화면은 바뀌어도 navbar는 유지 */}
      <Routes>
        <Route path="/" element={<ProductAllPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/product/:id" element={<ProductDetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
