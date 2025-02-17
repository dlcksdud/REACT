import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ContactItem = ({name, phoneNumber}) => {
    
  return (
    <Row>
        <Col lg={2}>
            {name || phoneNumber ? (
                <img 
                    width="100" 
                    src='https://dimg.donga.com/wps/NEWS/IMAGE/2020/05/29/101267953.2.jpg'></img>) 
                : ("")}
        </Col>
        <Col lg={10} className='contact-item-col'>
            <div>{name}</div>
            <div>{phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem