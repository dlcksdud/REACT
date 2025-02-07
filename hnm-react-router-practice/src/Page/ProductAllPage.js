import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../component/ProductCard';
// bootstrap에서 Container : 아이템을 가운데에 둘 수 있게 해줌
import { Container, Row, Col } from 'react-bootstrap';


const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts =()=> {
    let url = `http://localhost:5000/products`;
    axios.get(url)
        .then((res)=> {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage