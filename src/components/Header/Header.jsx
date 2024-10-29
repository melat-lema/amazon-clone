import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';
function Header(){
  const [{user, basket}, dispatch]=useContext(DataContext)
  console.log(basket.length)
  const totalItem= basket?.reduce((amount, item)=>{
    return item.amount+amount
  }, 0)

  return(
    <section className={classes.fixed}>
     <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
          {/* {logo} */}
            <Link to="/amazonclone">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>  
            {/* {delivery} */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
               </span>
               <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
               </div>  
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon"/>
            <BsSearch size={38}/>
          </div>
          <div className={classes.order__container}>
          {/* {right side link} */}
           
              <a href="" className={classes.language}>
                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png" alt="Flag"/>
                <select>
                  <option value="">EN</option>
                </select>
              </a>
              <Link to={!user && "/auth"}>
                <div>{
                  user?(
                  <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                )
                :(
                  <>
                  <p>Hello, sign in</p>
                  <span>Account & Lists</span>
                  </>
                )}
                 
                </div>
              </Link>
              {/* {order} */}
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              
              </Link>
            {/* {cart} */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            
          </div>
        </div>
      </section>
      <LowerHeader/>
    </section>
  )
}


export default Header