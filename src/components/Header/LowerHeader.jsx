import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from './Header.module.css'
function LowerHeader(){
  return(
    <div className={classes.lower__container}>
      <ul>
        <li>
         <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registration</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader