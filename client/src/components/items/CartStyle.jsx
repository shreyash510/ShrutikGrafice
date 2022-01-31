import React from 'react';

const Cart = () => {
  return (
    <>
      <div style={{ width: '22em', height: '9em' }} className="row g-3card container my-3 flex flex-row border-2xl">
        <div style={{ width: '5em' }} className="img ">
          <img className='rounded-2' src="https://www.desievite.com/sample-ecard/marathi-wedding-ecard-lagna-patrika-template-95.jpg" alt="lgnPatrika" />
        </div>
        <div style={{ width: '70%' }} className="info m-2">
          <h1 className='text-1xl font-bold'>Wedding Card</h1>
          <p className='text-2xl font-bold'>Price: 143/-</p>
          <button className="btn btn-primary my-2">Delete</button>
        </div>
      </div>
    </>
  )
};

export default Cart;
