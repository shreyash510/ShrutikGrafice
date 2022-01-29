import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const About=()=> {
    const  navigator = useNavigate()

useEffect(()=>{
        const url = 'http://localhost:8000/about'
        axios.get(url)
        .then((res)=>{
            if(!res.status === 200){
                const error  = new Error(res.error)
                throw error
            }
        })
        .catch((e)=>{
            console.log(e)
            navigator('/Login')
        })
},[navigator])

    return (
        <>
            <h1>About</h1>
        </>
    )
}

const Logout=()=>{
    const navigator = useNavigate()
useEffect(()=>{
    const url = '/logout';
    axios.get(url)
    .then((res)=>{
        if(!res.status === 200){
            const error = new Error(res.error)
            throw error
        }
        navigator('/Login', {replace:true})
    })    
},[navigator])

    return(
        <>
            
        </>
    )
}
export default About;
export {Logout}