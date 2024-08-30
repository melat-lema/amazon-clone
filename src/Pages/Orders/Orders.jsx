import React, {useContext, useEffect, useState} from 'react'
import classes from'./orders.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'

function Orders(){
  const [{user}, dispatch]=useContext(DataContext)
  const[orders, setOrders]= useState([])

  useEffect(()=>{
    if(user){
      db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot)=>{
        setOrders(
          snapshot.docs.map((doc)=>({
            id: doc.id,
            data : doc.data()
      }))
        )
      });
    }
    else{
      setOrders([])
    }
  }, [])
  return(
   <LayOut>
    <section className={classes.container}>
      <div className= {classes.orders__container}>
        <h2>Your Orders</h2>
        {
          orders?.length==0 &&  <div style={{padding: "20px"}}>You don't have orders yet.</div>
        }
        {/* {ordered Items} */}
        <div>
          {
        orders?.map((eachOrder)=>{
          return (
            <div>
              <hr/>
              <p>Order Id: {eachOrder?.id}</p>
              {
                eachOrder?.data?.basket?.map((order)=>{
                 return <ProductCard
                  flex={true}
                  product={order}
                  id={order.id}
                  
                  />
        })
              }
            </div>
          )
        })
          }
        </div>
      </div>
    </section>
   </LayOut>
  )
}

export default Orders