import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); // 새로고침 기능 없앰
    console.log("Login user function issue");
    setAuthenticate(true);
    navigate("/");
  }
  

  return (
    // 선생님은 <Container/> 사용
    // 로그인 백엔드는 없기 때문에 form submit 시 새로고침 기능 없앰
    <Form className='login-form' onSubmit={(event) => loginUser(event)}>
      <div className='login-form-div'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  )
}

export default LoginPage