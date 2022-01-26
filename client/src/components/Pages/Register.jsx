import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import('../styling/register.css')


const Register = () => {
    const [info, setInfo] = useState({});
    const [color, setColor] = useState({ borderColor: '' });
    const [msg, setMsg] = useState('');
    const [msgColor, setMsgColor] = useState({ color: 'red', fontWeigth: 'bold' })

    const navigator = useNavigate();

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
        const { firstname, sirname, email, phone, state, pass, cpass,  } = info;
        if (!firstname || !sirname || !email || !state || !phone || !pass || !cpass) {
            setMsg(`Please fill full form!`)
            setMsgColor({ color: 'red', fontWeigth: 'bold' })
            setColor({ borderColor: 'red' })
            // alert('fill full form!')
        } else if (pass === cpass) {
            const url = '/register';
            axios.post(url, info)
                .then((res) => {
                    const msgData = res.data.message;
                    (msgData) ? setMsg(res.data.message) || setMsgColor({ color: 'green', fontWeigth: 'bold' }) || setColor({ borderColor: 'green' }) || setTimeout(() => { navigator('/login') }, 2000) :
                        setMsg(res.data.error) || setColor({ borderColor: 'red' }) || setMsgColor({ color: 'red', fontWeigth: 'bold' });
                })
                .catch((e) => {
                    setColor({ borderColor: 'red' })
                    setMsg('Error Found')
                })
        } else {
            setColor({ borderColor: 'red' })
            setMsg(`Your password and Current Passsword Doesn't match`)
            setMsgColor({ color: 'red', fontWeigth: 'bold' })
        }
    }
    return (
        <>
            <div style={color} className="register container p-4 rounded-2xl border-2 shadow-sm">
                <p style={msgColor}>{msg}</p>
                <div className="container pb-4">
                    <h1 className='text-4xl font-bold'>Sign Up</h1>
                    <p className='p-2'>It's quick and easy</p><hr />
                </div>
                <form method='POST' className="row g-3">
                    <div className="col-md-6">
                        <input style={color} type="text" className="form-control" name="firstname" onChange={inputEvent} placeholder='First Name...' />
                    </div>
                    <div className="col-md-6">
                        <input style={color} type="text" className="form-control" name="sirname" onChange={inputEvent} placeholder='Surname...' />
                    </div>
                    <div className="col-md-6">
                        <input style={color} type="text" className="form-control" name="phone" onChange={inputEvent} placeholder='Enter phone no...' />
                    </div>
                    <div className="col-md-6">
                        <input style={color} type="text" className="form-control" name="state" onChange={inputEvent} placeholder='Enter State...' />
                    </div>
                    <div className="col-md-12">
                        <input style={color} type="email" className="form-control" name="email" onChange={inputEvent} placeholder='Enter email...' />
                    </div>
                    <div className="col-md-6">
                        <input style={color} type="password" className="form-control" name="pass" onChange={inputEvent} placeholder='Enter password...' />
                    </div>
                    <div className="col-md-6">
                        <input style={color} type="password" className="form-control" name="cpass" onChange={inputEvent} placeholder='Enter Confirm Password...' />
                    </div>
                    <div className="terms">
                        <p className='text-xs'>By clicking Sign Up. you agree to our Terms, Data Policy and Cookie Policy. you may receive SMS notification
                            from us and can opt out at any time.</p>
                    </div>
                    <NavLink to="/Login" className='text-blue-700 text-center' >already have an account</NavLink>
                    <div className="col-12 flex justify-center">
                        <button onClick={btnClick} className="btn btn-primary px-4">SignUp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;