import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import ('../styling/register.css')


const Login = () => {
    const navigater = useNavigate();

    const [info, setInfo] = useState([])
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
    const btnClick = (e) => {
        e.preventDefault()
        const { email, pass } = info;
        if (email && pass) {
            const url = 'http://localhost:8000/login';
            axios.post(url, info)
                .then((res)=>{
                    const msgData = res.data.message;
                    (msgData)? setMsg(res.data.message) || setMsgColor({color:'green',fontWeigth:'bold'}) ||  setColor({borderColor:'green'})
                     || setTimeout(()=>{navigater('/',2000)})
                      :
                     setMsg(res.data.error) || setColor({borderColor:'red'})|| setMsgColor({color:'red',fontWeigth:'bold'});
                })
                .catch((e) => {
                    // alert('error found')
                    setColor({borderColor:'red'})
                    setMsg('Error Found')
                })
        } else {
            setColor({borderColor:'red'})
            setMsg('plese fill email or password')
            setMsgColor({color:'red',fontWeigth:'bold'})
        }
    }
    return (
        <>
            <div style={color} className="login container my-5 p-4 rounded-2xl border-2 shadow-sm w-[25em]">
                <p style={msgColor}>{msg}</p>
                <div className="container pb-2">
                <h1 className='text-4xl font-bold'>Login</h1>
                <p className='p-2'>It's quick and easy</p><hr />
            </div>
                <form className='pt-3'>
                    <div className="mb-4">
                        <input style={color} type="email" onChange={inputEvent} id='' name="email" placeholder='Enter email...' className="form-control" required/>
                    </div>
                    <div className="mb-4">
                        <input style={color} type="password" onChange={inputEvent} name="pass" placeholder='Enter pass...' className="form-control" required/>
                    </div>
                    <NavLink to="/register" className='text-blue-700 text-center' >Create new account</NavLink><br />
                    <NavLink to="/forgot" className='forgot text-blue-700 text-center' >forgot Password</NavLink>

                    <div className="col-12 mt-3 ml-4 mr-3">
                        <button onClick={btnClick} className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;