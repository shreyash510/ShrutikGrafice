import axios from "axios"
import React, { useState, useEffect } from "react"
import CartStyle from '../items/CartStyle'


const Cart = () => {
  const [tsum, setTsum] = useState()
  const [total, setTotal] = useState()
  const [data, setData] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Cart'));
    if (data === null) {
      console.log('No Data found')
    }else{
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
      }
    })
  }
  }, [])

  useEffect(() => {
    let sum = 0
    setTotal(data.length)
    data.map((v) => {
      return setTsum(sum += v.DiscountPrice)
    })
  }, [data])


  const delBtn = (id) => {
    setData((preV) => {
      return preV.filter((arrEle, index) => {
        return index !== id 
      })
    })
    // localStorage.setItem('Cart', JSON.stringify(data))
    alert('delete successfully')
  }
  return (
    <>
      <div className=" cartStyle row g-3">
        <div className="left col-md-4">
          <div className="card m-3 p-3 rounded-2xl">
            <p className=''>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
            <div className="priceCal flex flex-col items-end">
              <p style={{ fontSize: '1.5em' }} className='font-medium pt-3'>Total items: {total}</p>
              {
                data.map((v, i) => {
                  return <p key={i} className='font-bold text-xl'>Rs.{v.DiscountPrice}</p>
                })
              }
            </div>
            <h1 className='text-3xl py-3 font-bold '>Total : {tsum}.00</h1>
            <button className="btn btn-primary">Proceed to Buy</button>
          </div>
        </div>
        <div className="right col-md-8 flex flex-wrap justify-around">

          {
            data.map((v, i) => {
              return <CartStyle
                key={i}
                id={i}
                title={v.title}
                price={v.DiscountPrice}
                img={v.image}
                delete={() => delBtn(i)}
              />
            })

          }
        </div>
      </div>
    </>
  )
}

export default Cart;