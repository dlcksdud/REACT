import React from 'react'
import {useNavigate} from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const goToHomePage=()=> {
      navigate('/')
  }

  return (
    <div>
      AboutPage
      <button onClick={goToHomePage}>Go to Homepage</button>
    </div>
    
  )
}

export default AboutPage;