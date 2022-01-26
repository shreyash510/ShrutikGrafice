import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import('../styling/register.css')

const Forgot = () => {
    const navigate = useNavigate();

    const [info, setInfo] = useState([])
    const [btn1, setBtn1]=useState({visibility:'visible'})
    const [btn2, setBtn2]=useState({visibility:'hidden'})
    const [hide, setHide] = useState({ display:'none' })
    const [msg, setMsg]=useState('')
    const [msgColor, setMsgColor]= useState({color: 'green'})
    const [borderColor, setBorderColor] = useState()
    const inputevent = (e) => {
        setInfo((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
        // console.log(e.target.value)        
    }
    const btnClick = (e) => {
        e.preventDefault()        
        // console.log(info)
        
        const { email, pass, cpass } = info;
       
        if (!email) {
            console.log('ple enter email')
        }else if(pass !== cpass ){
            setMsg(`Your password and Current Passsword Doesn't match ( Password length must be greater than 4)`)
            setMsgColor({color:'red'})
            setBorderColor({borderColor:'red'})
        } else {
            const url = '/forgot';
            axios.post(url, info)
                .then((res) => {
                    const msgData = res.data.message;
                    (msgData) ? setMsg(msgData) || setMsgColor({color:'green'}) ||setBorderColor({borderColor:'green'}) || setHide({visibility: 'visible'}) || setBtn1({display:'none'}) || setBtn2({visibility:'visible'}): 
                                setMsg(res.data.error) || setMsgColor({color:'red'}) || setBorderColor({borderColor:'red'})
                })
                .catch((e) => {
                    console.log('error found')
                })
        }
              
    }
    return (
        <>
            <div className="forgot container my-5 p-4 rounded-2xl border-2 shadow-sm w-[25em]">
            <p style={msgColor}>{msg}</p>
            <div className="container pb-2">
                <h1 className='text-4xl font-bold pb-3'>Forgot Password</h1>
                <hr />
            </div>
                <form className='pt-3'>
                    <div className="mb-4">
                        <label className="form-label">Please enter your email address to search for your account</label>
                        <input type="email" style={borderColor} onChange={inputevent} name="email" placeholder='Enter Email here...' className="form-control" required />
                    </div>
                    <div style={hide} className="password">
                        <div className="mb-4">
                            <label className="form-label">New Password</label>
                            <input type="password" style={borderColor} onChange={inputevent} name="pass" placeholder='Enter new Password ...' className="form-control" required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" style={borderColor} onChange={inputevent} name="cpass" placeholder='Enter confirm Password ...' className="form-control" required />
                        </div>
                    </div>
                    <NavLink to="/register" className='text-blue-700 text-center' >Create new account</NavLink>
                    <div style={btn1} className="col-12 mt-3 ml-4 mr-3">
                        <button onClick={btnClick} className="btn btn-primary">Next</button>
                    </div>
                    <div style={btn2} className="col-12 mt-3 ml-4 mr-3 flex justify-around">
                        <button onClick={btnClick} className="btn btn-primary">Update</button>
                        <button onClick={()=>{navigate('/login')}} className="btn btn-primary">Go to Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Forgot;
