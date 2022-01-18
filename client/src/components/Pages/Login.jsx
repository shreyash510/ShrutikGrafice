import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'


const Login = () => {
    const [info, setInfo] = useState({})
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
        const { email, pass } = info;
        if (email && pass) {
            const url = 'http://localhost:8000/login';
            axios.post(url, info)
                .then(res => alert(res.data.message))
                .catch((e) => {
                    alert('error found')
                })
        } else {
            alert('plese fill email or password')
        }
    }
    return (
        <>
            <div className="container my-5 p-4 rounded-2xl border-2 shadow-sm w-[25em]">
                <form>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" onChange={inputEvent} name="email" placeholder='enter email' className="form-control" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" onChange={inputEvent} name="pass" placeholder='enter pass' className="form-control" />
                    </div>
                    <NavLink to="/SignIn" className='text-blue-700 text-center' >Create new account</NavLink><br />

                    <div className="col-12 mt-3 ml-4 mr-3">
                        <button onClick={btnClick} className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;