import React, { useContext } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart(){
  const [{basket, user}, dispatch]=useContext(DataContext);
  const total= basket.reduce((amount, item)=>{
    return item.price*item.amount +amount
  }, 0)
  const increment=(item)=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item 
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return(
    <LayOut>
       <section className={classes.container}>
        <div className={classes.Cart__container}>
          <h2>Hello</h2>
              <h3>Your shopping basket</h3>
              <hr/>
              {
                basket?.length==0?(<p>Opps ! No item in your cart </p>):(
                 basket?.map((item, i)=>{
                  return <section className={classes.cart__product}>
                  
                  <ProductCard
                  key={i}
                     product={item}
                     renderDesc={true}
                     renderAdd={false}
                     flex={true}/>
                     <div className={classes.btn_container}>
                      <button className={classes.btn} onClick={()=>increment(item)}>
                      <IoIosArrowUp  sixe={30}/>
                      </button>
                      <span>{item.amount}</span>
                      <button className={classes.btn} onClick={()=>decrement(item.id)}>
                      <IoIosArrowDown sixe={30}/>
                      </button>
                     </div>
                     
                  </section>

                })
              )
              }
              
        </div>
        
        
          {basket?.length !==0 &&(
            <div className={classes.subtotal}>
              <div>
                <p> Subtotal ({basket?.length}items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type='checkbox'/>
                <small>This order contains a gift</small>
              </span>
              <Link to='/payments'>Continue to checkbox</Link>
            </div>
          )

          }
        
       </section>
    </LayOut>

  )
}

export default Cart