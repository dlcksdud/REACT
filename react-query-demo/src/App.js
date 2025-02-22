import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import HomePage from './Component/HomePage';
import ReactQueryPage from './Component/ReactQueryPage';
import NomalPage from './Component/NomalPage';

function App() {
  return (
    <div>
      <div className='app'>
        <Link to="/">홈페이지~</Link>
        <Link to="/nomal-fetch">NOMAL FETCH</Link>
        <Link to="/react-query">리액트 쿼리~</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/nomal-fetch" element={<NomalPage />}></Route>
        <Route path="/react-query" element={<ReactQueryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
