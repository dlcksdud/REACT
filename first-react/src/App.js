// import logo from './logo.svg';
import './App.css';
// 만들어준 Box 수입
import Box from "./component/Box"

function App() {
  return (
    <div>
      {/* 수입한 컴포넌트 삽입*/}
      <Box/>
      <Box/> 
      {/* 리액트의 장점 : 간편한 코드 */}

      <div className='box'>
        Box1
        <p>리사</p>
      </div>

      <div className='box'>
        Box1
        <p>리사</p>
      </div>
    </div>
    
    // <div className='box'>
    //   Box1
    //   <p>리사</p>
    // </div>
    /**
     * 에러나는 이유 : return안에서 따로 떨어져 있으면 안된다. 하나로 묶어줘야 함
     */

    /**
     * 리액트의 장점 : 코드의 재활용
     */
  );
}

export default App;
