import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import  Carousel from '../../components/Carousel/carousel'
import Category from '../../components/Category/Category'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Product from '../../components/Product/Product';


function Landing(){
  return(
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/>
    </LayOut>
  )
}

export default Landing