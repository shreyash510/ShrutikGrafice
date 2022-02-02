import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import CartStyle from '../items/CartStyle'
import { useState } from 'react';

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
  const sum = 0;
  const [data, setData] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Cart'));
    if (!data) {
      console.log('go to empty Cart')
    } else {
      data.map(async (v) => {
        try {
          axios.get(`/cart/${v}`)
            .then((res) => {
              return setData((preV) => {
                return [...preV, res.data]
              })
            })
            .catch(e => { console.log(e) })
        } catch (e) {
          console.log(e);
          navigator('/Login');
        }
      })
    }
  }, [])

  
  return (
    <>
      <div className=" cartStyle row g-3">
        <div className="left col-md-4">
          <div className="card m-3 p-3 rounded-2xl">
            <p className=''>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
            <div className="priceCal flex flex-col items-center">
              <p style={{ fontSize: '1.5em' }} className='font-medium pt-3'>Total items: </p>
              {
                data.map((v, i)=>{
                  return <p key={i} className='font-bold text-xl'>Rs. {v.DiscountPrice}</p>
                })
              }
            </div>
            <h1 className='text-3xl py-3 font-bold '>Total :{sum} .00</h1>
            <button className="btn btn-primary">Proceed to Buy</button>
          </div>
        </div>
        <div className="right col-md-8 flex flex-wrap justify-around">

          {
            data.map((v, i) => {
              return <CartStyle
                key={i}
                title={v.title}
                price={v.DiscountPrice}
                img={v.image}
              />
            })

          }
        </div>
      </div>
    </>
  )
}


export { Profile, Cart };
