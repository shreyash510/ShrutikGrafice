import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
    const [info, setInfo] = useState({});

    const inputEvent = (e) => {
        setInfo((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
    }

    const btnClick = async (e) => {
        e.preventDefault();
        const { name, email, phone, profession, pass, cpass } = info;
        if (!name || !email || !profession || !phone || !pass || !cpass) {
            alert('fill full form!')
        } else if (pass === cpass) {
            const url = 'http://localhost:8000/register';
            axios.post(url, info)
                .then(res => alert(res.data.message))
                .catch(e => console.log(e))
        } else {
            alert('invalid password plz enter same password')
        }

    }
    return (
        <>
            <div className="container my-5 p-4 rounded-2xl border-2 shadow-sm my-5 w-68">
                <form method='POST' className="row g-3">
                    <div className="col-md-5">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" name="name" onChange={inputEvent} placeholder='Enter Name...' />
                    </div>
                    <div className="col-md-7">
                        <label className="form-label">Your email</label>
                        <input type="email" className="form-control" name="email" onChange={inputEvent} placeholder='Enter email...' />
                    </div>
                    <div className="col-md-7">
                        <label className="form-label">Your Phone</label>
                        <input type="text" className="form-control" name="phone" onChange={inputEvent} placeholder='Enter phone no...' />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Your Profesion</label>
                        <input type="text" className="form-control" name="profession" onChange={inputEvent} placeholder='Enter Profesion...' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Your Password</label>
                        <input type="password" className="form-control" name="pass" onChange={inputEvent} placeholder='Enter password...' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpass" onChange={inputEvent} placeholder='Enter Confirm Password...' />
                    </div>
                    <NavLink to="/Login" className='text-blue-700 text-center' >already have an account</NavLink>
                    <div className="col-12">
                        <button onClick={btnClick} className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;