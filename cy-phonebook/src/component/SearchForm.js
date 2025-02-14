import React, {useRef} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const searchInputRef = useRef();
    const dispatch = useDispatch();

    const seacrh = () => {
        console.log("검색어 : ", searchInputRef.current.value);
        dispatch({
            type: "SEARCHITEM",
            payload: searchInputRef.current.value
        })
    }
  return (
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder="검색어를 입력하세요." ref={searchInputRef} />
        </Col>
        <Col lg={2}>
            <Button onClick={() => seacrh()}>검색</Button>
        </Col>
    </Row>
  )
}

export default SearchForm