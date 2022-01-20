import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import ('../styling/register.css')


const Register = () => {
    const [info, setInfo] = useState({});
    const [color, setColor]=useState({borderColor:''});
    const [msg, setMsg]=useState('');
    const [msgColor, setMsgColor] = useState({color:'red',fontWeigth:'bold'})

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
            setMsg(`Please fill full form!`)
            setMsgColor({color:'red',fontWeigth:'bold'})
            setColor({borderColor:'red'})
            // alert('fill full form!')
        } else if (pass === cpass) {
            const url = 'http://localhost:8000/register';
            axios.post(url, info)
                .then((res)=>{
                    const msgData = res.data.message;
                    (msgData)? setMsg(res.data.message) || setMsgColor({color:'green',fontWeigth:'bold'}) ||  setColor({borderColor:'green'}) : setMsg(res.data.error) || setColor({borderColor:'red'}) || setMsgColor({color:'red',fontWeigth:'bold'});
                })
                .catch((e)=>{
                    setColor({borderColor:'red'})
                    setMsg('Error Found')
                })
        } else {
            setColor({borderColor:'red'})
            setMsg(`Your password and Current Passsword Doesn't match`)
            setMsgColor({color:'red',fontWeigth:'bold'})
        }
    }
    return (
        <>
            <div style={color} className="register container p-4 rounded-2xl border-2 shadow-sm">
            <p style={msgColor}>{msg}</p>
                <form method='POST' className="row g-3">
                    <div className="col-md-5">
                        <label className="form-label"> Name</label>
                        <input  style={color} type="text" className="form-control" name="name" onChange={inputEvent} placeholder='Enter Name...' />
                    </div>
                    <div className="col-md-7">
                        <label className="form-label"> email</label>
                        <input  style={color} type="email" className="form-control" name="email" onChange={inputEvent} placeholder='Enter email...' />
                    </div>
                    <div className="col-md-7">
                        <label className="form-label">Mobile</label>
                        <input  style={color} type="text" className="form-control" name="phone" onChange={inputEvent} placeholder='Enter phone no...' />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">State</label>
                        <input  style={color} type="text" className="form-control" name="profession" onChange={inputEvent} placeholder='Enter State...' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label"> Password</label>
                        <input  style={color} type="password" className="form-control" name="pass" onChange={inputEvent} placeholder='Enter password...' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input  style={color} type="password" className="form-control" name="cpass" onChange={inputEvent} placeholder='Enter Confirm Password...' />
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

export default Register;