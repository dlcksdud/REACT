import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../component/ProductCard';
// bootstrap에서 Container : 아이템을 가운데에 둘 수 있게 해줌
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts =()=> {
    let searchQuery = query.get('q') || "";
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products?q=${searchQuery}`;
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
  }, [query]);

  // useEffect(() => {
  //   const trimmedSearchWord = searchWord.trim();
  //   if (trimmedSearchWord) {
  //     const filtered = productList.filter((menu) =>
  //       menu.title.toLowerCase().includes(trimmedSearchWord.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts(productList);
  //   }
  // }, [searchWord]);


  return (
    <div>
      <Container>
        <Row>
        {productList.map((menu) => (
          <Col lg={3} key={menu.id}>
            <ProductCard item={menu} />
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage