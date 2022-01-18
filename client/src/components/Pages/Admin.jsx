import axios from 'axios';
import React, { useState } from 'react'

const Admin = () => {
    const [info, setInfo] = useState({});
    const inputEvent = (e) => {
        setInfo((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
    }

    const btnClick = (e) => {
        e.preventDefault();
        const { title, price, img } = info;
        console.log(info)
        const url = 'http://localhost:8000/admin-data'
        axios.post(url, info)
            .then((res) => {
                alert(res.data.message)
            })
            .catch((e) => {
                console.log("error found")
            })
        console.clear(title, price, img)
        setInfo({
            title: '',
            price: '',
            img: '',
        })
    }
    return (
        <>
            <div className="container my-5 p-4 rounded-2xl border-2 shadow-sm my-5 w-50">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={inputEvent} value={info.title} name='title' placeholder='Enter Graphics title....' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Price</label>
                        <input type="text" className="form-control" onChange={inputEvent} value={info.price} name='price' placeholder='Enter Price here' />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Image</label>
                        <input type="text" className="form-control" onChange={inputEvent} value={info.img} name='img' placeholder='Enter Image link..' />
                    </div>

                    <div className="col-12">
                        <button onClick={btnClick} className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Admin;