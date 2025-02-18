import React from 'react'
import ProductDetailPage from "../Page/ProductDetailPage";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {

  const authenticate = useSelector(state => state.auth.authenticate);

  return (
    authenticate == true ? <ProductDetailPage/> : <Navigate to='/login'/>
  )
}

export default PrivateRoute
