import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux';

const ContactForm = () => {
    const dispatch = useDispatch();

    const saveUser = (event) => {
        event.preventDefault(); // 새로고침 기능 없앰
        
        if(!event.target[0].value.trim() || !event.target[1].value.trim()) {
            alert("이름과 연락처를 입력하세요.");
        } else {
            console.log(event.target[0].value);
            console.log(event.target[1].value);
            dispatch({
                type: "SAVEITEM",
                payload: {
                    name: event.target[0].value, 
                    phoneNumber: event.target[1].value}
            })
        }
        
    }
    
  return (
    <div>
        <Form onSubmit={(event) => saveUser(event)}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력하세요." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="연락처를 입력하세요." />
            </Form.Group>
            <Button variant="primary" type="submit">
                저장
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm;