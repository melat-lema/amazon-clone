import React, { useEffect, useState } from 'react'
import classes from './product.module.css'
import ProductCard from './ProductCard'
import axios from 'axios'
import Loader from '../Loader/Loader'

function Product(){
  const [products, setProduct]= useState()
  const [isLoading, setIsLoading]= useState(false)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
     .then((res)=>{
      console.log(res.data)
      setProduct(res.data)
      setIsLoading(false)
     })
     .catch((err)=>{
      console.log(err)
      setIsLoading(false)

     })
  }, [])
  return(
    <>
       {
        isLoading?(<Loader/>) : (
          <section className={classes.product__container}>
      {
        products?.map((singleProduct)=>{
          return <ProductCard product={singleProduct} renderAdd={true} key={singleProduct.id}/>
        })
      }
    </section>
        )
       }
    </>
  )
}

export default Product