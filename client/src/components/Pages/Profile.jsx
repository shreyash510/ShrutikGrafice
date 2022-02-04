import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Profile=()=> {
  const navigator = useNavigate()

  useEffect(() => {
    const url = '/about'
    axios.get(url)
      .then((res) => {
        if (!res.status === 200) {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch((e) => {
        console.log(e)
        navigator('/Login')
      })
  }, [navigator])
  return (
    <>
    <div className="container w-50">
      <div className=" my-4 row g-3 p-4 rounded-2xl border-2 shadow-sm flex">
        <div className="left col-md-4">
          <div className="imgsection w-40">
            <img  style={{borderRadius:'50%'}} src="https://i.ibb.co/KXFgpRc/undraw-male-avatar-323b.png" alt="profile page" />
          </div>
        </div>
        <div className="right col-md-8">
          <div className="imf">
              <h1 className='text-4xl font-bold'>Shreyash Kolhe</h1>
              <h1 className='text-2xl py-2 font-bold'>shreyashkolhe2001@gmail.com</h1>
              <h1 className='text-2xl py-2 font-bold'>9561300851</h1>
              <h1 className='text-2xl py-2 font-bold'>Maharastra</h1>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}




export default Profile;
