import React from 'react'
import {useNavigate, Link } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage =()=> {
      navigate('/products?q=pants')
      // ? 쿼리 뒤의 값은 url 경로에 영향을 미치지 않는다.
  }
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">Go to AboutPage</Link>
        <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage;
