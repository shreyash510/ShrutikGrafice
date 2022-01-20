import React from 'react';
import { NavLink } from 'react-router-dom';
import ('../styling/register.css')

const Forgot=()=> {
  return(
    <>
         <div className="forgot container my-5 p-4 rounded-2xl border-2 shadow-sm w-[25em]">
                <form className='pt-3'>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email" placeholder='Enter Email here...' className="form-control" required/>
                    </div>
                    <div className="password">
                    <div className="mb-4">
                        <label className="form-label">New Password</label>
                        <input type="password" name="pass" placeholder='Enter new Password ...' className="form-control" required/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="pass" placeholder='Enter confirm Password ...' className="form-control" required/>
                    </div>
                    </div>
                    <NavLink to="/register" className='text-blue-700 text-center' >Create new account</NavLink>
                    <div className="col-12 mt-3 ml-4 mr-3">
                        <button className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Forgot;
