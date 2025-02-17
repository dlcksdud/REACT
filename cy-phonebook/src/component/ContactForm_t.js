import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    const addContact = (e) => {
        e.preventDefault();
        // key:value 의 이름이 같다면 하나만 적어도 됨 {name: name, phoneNumber: phoneNumber}
        dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}})
    }
    
  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="이름을 입력하세요." 
                    onChange={(event) => {
                        setName(event.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="연락처를 입력하세요." 
                    onChange={(event) => {
                        setPhoneNumber(event.target.value)
                }}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                저장
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm;