import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
// bootstrap에서 Container : 아이템을 가운데에 둘 수 있게 해줌
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

// productAction에서 객체로 반환했기 때문에 {객체명} 으로 들고와야 한다.
import {productActions} from '../redux/reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAllPage = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  console.log(productList);
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || "";

    // 바로 store로 안가고 productAction의 getProducts 함수를 거쳐서 가도록
    // dispatch(productActions.getAllProducts(searchQuery));
    dispatch(fetchProducts(searchQuery));
  }

  useEffect(() => {
    getProducts();
  }, [query]);


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