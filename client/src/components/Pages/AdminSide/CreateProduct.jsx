import React from 'react';
import { useState } from 'react';
import('../../styling/CreateProduct.css')

function AdminAbout() {
  const [info, setInfo] = useState({})
  const inputEvent=(e)=>{
    setInfo((preV)=>{
      return{
        ...preV,
        [e.target.name]:e.target.value
      }
    })
  }

  const btnClick=(e)=>{
    e.preventDefault()
    console.log(info)
  }
  return (
    <>
      <div className="createProduct z-40 container p-3 my-4 rounded-2xl border-2 shadow-sm">
        <form method='POST' className="row g-3">
          <div className="col-md-7">
            <label className="form-label"> Name</label>
            <input onChange={inputEvent}  type="text" className="form-control" name="name" placeholder='Enter Name...' />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputState" className="form-label">Categories</label>
            <select onChange={inputEvent} name='Category'  defaultValue="Select..." className="form-select" >
              <option selected>Choose...</option>
              <option value="Birthday Banner">Birthday Banner</option>
              <option value="Wedding Card">Wedding Card</option>
              <option value="Festivel Banner">Festivel Banner</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Invitation Card">Invitation Card</option>
              <option value="Menu Card">Menu Card</option>
              <option value="Visiting Card">Visiting Card</option>
              <option value="Business Card">Business Card</option>
              <option value="Election Card">Election Card</option>
            </select>
          </div>
          <div className="col-md-6 flex">
            <span className="input-group-text">Discount Price</span>
            <input onChange={inputEvent} name='DiscountPrice' type="number" className="form-control" />
          </div>
          <div className="col-md-6 flex">
            <span className="input-group-text">Original Price</span>
            <input onChange={inputEvent} name='OriginalPrice' type="number" className="form-control" />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="formFile" className="form-label">Upload Image 1</label>
            <input onChange={inputEvent} name='Image1' className="form-control" type="file"/>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="formFile" className="form-label">Upload Image 2</label>
            <input onChange={inputEvent} name='Image2' className="form-control" type="file" id="formFile" />
          </div>
          <div className="form-floating">
            <textarea onChange={inputEvent} name='Description' style={{ height: '100px' }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            <label htmlFor="floatingTextarea2">Enter Description here....</label>
          </div>

          <div className="col-12">
            <button onClick={btnClick} className="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminAbout;
