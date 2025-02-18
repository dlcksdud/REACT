import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authenticateAction } from '../redux/actions/authenticateAction';

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');


  const loginUser = (event) => {
    event.preventDefault(); // 새로고침 기능 없앰
    console.log("Login user function issue");
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, pw))
    navigate("/");
  }
  

  return (
    // 선생님은 <Container/> 사용
    // 로그인 백엔드는 없기 때문에 form submit 시 새로고침 기능 없앰
    <Form className='login-form' onSubmit={(event) => loginUser(event)}>
      <div className='login-form-div'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  )
}

export default LoginPage