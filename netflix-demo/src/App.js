import { Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';

/**
 * 홈페이지 : /
 * 영화 전체 보여주는 페이지 (서치) : /movies?q=
 * 영화 디테일 페이지 : /movies/:id
 */
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

export default App;
