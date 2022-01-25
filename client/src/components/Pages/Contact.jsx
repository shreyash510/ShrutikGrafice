import React from 'react'
import { useState } from 'react'

export default function Contact() {
    const [contact, setContact] = useState({});
    const inputEvent = (e)=>{
        setContact((preV)=>{
            return{
                ...preV,
                [e.target.name]:e.target.value
            }
        })
    }
    const btnClick = ()=>{
        console.log(contact)
    }
    return (
        <>
            <div className="container px-2 my-5">
                <div className="contact flex item-center justify-around row g-3">
                    <div className="col-md-4 ">
                        <h1 className='text-5xl text-center pb-4' >Let's talk</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque corporis voluptate maiores illum tenetur consequatur numquam obcaecati blanditiis aspernatur quia porro hic ipsam dolores optio et, ut dicta ex praesentium </p>

                    </div>
                    <div className="col-md-4 ">
                        <form className="row g-3 shadow-sm rounded-3 p-2">
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' onChange={inputEvent} placeholder="Enter Name" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={inputEvent} placeholder="Enter Email" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label">Mobile No.</label>
                                <input type="text" className="form-control" name='mobile' onChange={inputEvent} placeholder="Enter Mobile" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label">State</label>
                                <input type="text" className="form-control" name='state' onChange={inputEvent} placeholder="Enter State" />
                            </div>

                        </form>
                    </div>
                    <div className="col-md-4 ">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <p className="form-control p-3 border">{contact.email}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" name='msg' onChange={inputEvent} placeholder="Enter message here...." rows="8"></textarea>
                        </div>
                        <div className="col-12">
                            <button onClick={btnClick} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
