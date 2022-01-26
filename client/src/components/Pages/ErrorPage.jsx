import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigater = useNavigate()
  return (
        <>
        <div style={{height:'80vh'}} className=" flex items-center">
            <div className="container text-center">
                <h1 className='font-bold text-3xl'>WE ARE SORRY, PAGE NOT FOUND!</h1>
                <h1 style={{fontSize:'20em',left:'25%', top:'15%', zIndex:-1}} className='absolute font-black opacity-10'>404</h1>
                <p className='py-3'>The page you are looking for might have been removed had its name changed or is temporarly unavailable!</p>
                <button style={{cursor:'pointer', zIndex:2}} onClick={()=>{navigater('/')}}
                 className='p-3 border rounded-2xl bg-indigo-700 text-white text-sm btn'
                 >Go To Home</button>
            </div>

        </div>
        </>
      )
};

export default ErrorPage;
