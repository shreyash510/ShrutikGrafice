import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import('../../styling/CreateProduct.css')


function AdminAbout() {
  const [info, setInfo] = useState({})
  const [color, setColor] = useState({ borderColor: '' });
  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState({ color: 'red', fontWeigth: 'bold' })

  const inputEvent = (e) => {
    setInfo((preV) => {
      return {
        ...preV,
        [e.target.name]: e.target.value
      }
    })
  }

  const btnClick = (e) => {
    e.preventDefault()
    // console.log(info)
    const { title, category, OriginalPrice, DiscountPrice, description, image } = info;
    if (!title || !category || !OriginalPrice || !DiscountPrice || !description || !image) {
      setMsg(`Please fill full form!`)
      setMsgColor({ color: 'red', fontWeigth: 'bold' })
      setColor({ borderColor: 'red' })
    } else {
        const url = 'http://localhost:8000/create-product';
        axios.post(url, info)
        .then((res) => {
          const msgData = res.data.message;
          (msgData) ? setMsg(res.data.message) || setMsgColor({ color: 'green', fontWeigth: 'bold' }) || setColor({ borderColor: 'green' }) || setTimeout(()=>{setInfo({
            title:'',category:'', OriginalPrice:'', DiscountPrice:'', description:'', image:''}) || setMsg('') || setColor({ borderColor: 'gray' })},2000) :
                      setMsg(res.data.error) || setColor({ borderColor: 'red' }) || setMsgColor({ color: 'red', fontWeigth: 'bold' });
        })
        .catch((e) => {
          setColor({ borderColor: 'red' })
          setMsg('Error Found')
        })
    }
    
  }
  return (
    <>
      <div style={color} className="createProduct z-40 container p-3 my-4 rounded-2xl border-2 shadow-sm">
        <p style={msgColor}>{msg}</p>
        <form method='POST' className="row g-3">
          <div className="col-md-7">
            <label className="form-label"> Name</label>
            <input style={color} onChange={inputEvent} type="text" className="form-control" name="title" value={info.title} placeholder='Enter Name...' />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputState" className="form-label">Categories</label>
            <select style={color} onChange={inputEvent} name='category' value={info.category} defaultValue={'DEFAULT'} className="form-select" >
              <option value="DEFAULT" disabled>Choose...</option>
              <option value="Birthday Banner">Birthday Banner</option>
              <option value="Wedding Card">Wedding Card</option>
              <option value="Festivel Banner">Festivel Banner</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Invitation Card">Invitation Card</option>
              <option value="Menu Card">Menu Card</option>
              <option value="Business Card">Business Card</option>
              <option value="Election Card">Election Card</option>
            </select>
          </div>
          <div className="col-md-6 flex">
            <span className="input-group-text">Discount Price</span>
            <input style={color} onChange={inputEvent} name='DiscountPrice' value={info.DiscountPrice} type="number" className="form-control" />
          </div>
          <div className="col-md-6 flex">
            <span className="input-group-text">Original Price</span>
            <input style={color} onChange={inputEvent} name='OriginalPrice' value={info.OriginalPrice} type="number" className="form-control" />
          </div>
          <div className="mb-3 col-md-12">
            <label htmlFor="formFile" className="form-label">Upload Image</label>
            <input style={color} onChange={inputEvent} name='image' value={info.image} className="form-control" type="text" placeholder='Enter Image Url....' />
          </div>
          <div className="form-floating">
            <textarea style={color} onChange={inputEvent} name='description' value={info.description} className="form-control" placeholder="Leave a comment here" rows="100%" cols="0%" id="floatingTextarea2" ></textarea>
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
