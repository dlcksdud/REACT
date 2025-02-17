import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetailPage = () => {
  useEffect(()=>{
    getProductDetail();
  }, [])

  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("사이즈 선택");
  const getProductDetail = () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products/${id}`;
    axios.get(url)
        .then((res) =>{
          console.log(res.data);
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div className='font-sizing'>{product?.choice == true ? "MD Choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              {size}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSize("사이즈 선택")}>사이즈 선택</Dropdown.Item>
              {product?.size.map(sml => (
                  <Dropdown.Item onClick={() => setSize(sml)}>{sml}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage