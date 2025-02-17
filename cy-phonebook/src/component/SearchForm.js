import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const goSeacrh = () => {
        console.log(search);
        dispatch({
            type: "SEARCHITEM",
            payload: search
        })
    }
  return (
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder="검색어를 입력하세요." onChange={(e) => {setSearch(e.target.value)}} />
        </Col>
        <Col lg={2}>
            <Button onClick={() => goSeacrh()}>검색</Button>
        </Col>
    </Row>
  )
}

export default SearchForm