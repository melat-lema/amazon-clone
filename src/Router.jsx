import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe('pk_test_51PrfWG2M8axnmueUxYIPTWDI5H2wibQpR3nqAcFE0ozzWMWph33pKrlaXPNxS4knoCfPdbntilQsz9BcMYKI9fy3009dEVmGcd');
function Routering(){
  return(
    <Router>
      <Routes>
        <Route path='/amazonclone' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path="/payments" element={
          <ProtectedRoute msg={"you must log in to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment/>
          </Elements>
          </ProtectedRoute>
        }
          />
        <Route path="/orders" element={
           <ProtectedRoute msg={"you must log in to access your order"} redirect={"/orders"}>
            <Orders/>
           </ProtectedRoute>         
          }/>
        <Route path='/category/:categoryName' element={<Results/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>    
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
} 

export default Routering