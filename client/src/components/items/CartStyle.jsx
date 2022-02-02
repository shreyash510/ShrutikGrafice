import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
  const [redirect, setRedirect] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Cart'));
    if (!data) {
      setRedirect('go to empty Cart')
    } else {
      data.map((v) => {
        return v
      })
    }
    if(redirect){
        console.log('no data found')
    }
}, [navigate, redirect])
return (
  <>
    <div style={{ width: '22em', height: '10em'}} className=" p-2 row g-3 card container rounded-2xl shadow py-2 my-3">
      <div style={{ width: '8em' }} className="img ">
        <img className='rounded-2' src={props.img} alt="lgnPatrika" />
      </div>
      <div style={{ width: '70%' }} className="info m-2">
        <h1 className='text-1xl font-bold'>{props.title}</h1>
        <p className='text-2xl font-bold'>Price: {props.price}/-</p>
        <button className="btn btn-primary my-2">Delete</button>
      </div>
    </div>
  </>
)
};

export default Cart;
