import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoints'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import ProductCard from '../../components/Product/ProductCard'


function ProductDetail(){
  const{productId}= useParams()
  const [product, setProduct]= useState([]);
  const[isLoading, setIsLoading]= useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setIsLoading(false)
      console.log(res.data)
  }) .catch((err)=> {console.log(err) 
                    setIsLoading(false)
                  })
  }, [])
  return(
    <LayOut>
        {isLoading? (<Loader/>):(<ProductCard
          product={product}
          flex={true}
          renderAdd={true}
          renderDesc={true}/>
        )} 
    </LayOut>
  )
}

export default ProductDetail