import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Product card에 필요한 것
 * img, choice, 제목, 가격, 신제품
 * 카드들이 중앙배열
 * 한줄에 4개씩 있음
 * 반응형 ui로 화면사이즈가 작아지면 하나씩 보이게 됨
 * 
 * 숙제
 * 1. 카드들 디자인 : 마우스 호버시 이미지 커지게
 * 2. choice 정리
 */
const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img}></img>
      <div className='font-sizing'>{item?.choice == true ? "MD Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div className='font-sizing'>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
