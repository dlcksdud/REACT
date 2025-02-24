import { Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
