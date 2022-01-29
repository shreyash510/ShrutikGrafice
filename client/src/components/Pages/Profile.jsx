import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CartStyle from '../items/CartStyle'

function Profile() {
  const navigator = useNavigate()

  useEffect(() => {
    const url = '/about'
    axios.get(url)
      .then((res) => {
        if (!res.status === 200) {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch((e) => {
        console.log(e)
        navigator('/Login')
      })
  }, [navigator])
  return (
    <>
      <h1>This is Profile Page</h1>
    </>
  )
}

function Cart() {
  return (
    <>
      <div className=" cartStyle row g-3">
        <div className="left col-md-5">
          <div className="card m-3 p-3 rounded-2xl">
            <p className=''>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
            <h1 className='text-2xl font-bold my-3 py-4'>Subtotal (1 item):   3,499.00</h1>
            <button className="btn btn-primary">Proceed to Buy</button>
          </div>
        </div>
        <div className="right col-md-7 flex flex-wrap">
            <CartStyle />
          </div>
        </div>
    </>
  )
}


export { Profile, Cart };
