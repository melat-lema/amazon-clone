import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from './img/data'
import classes from './Carousel.module.css'
function CarouselEffect(){
  return(
    <div>
<Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
>
      {
        img.map((imageItem)=>{
          return <img src={imageItem}/>
        })
      }
</Carousel>
<div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect