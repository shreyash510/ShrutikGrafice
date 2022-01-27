import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Navbar=()=> {
    const navigate = useNavigate()
    // const [database, setDatabase] = useState([]);
    const [navData, setNavData]= useState(<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto pt-2">
        <li className="nav-item">
            <Link to="/" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3 active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/templates" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Templates</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Contact</Link>
        </li>
        <div style={{marginTop: '-7px'}} className="btn">
            <button onClick={()=>{
                navigate('/login')
            }} className="btn btn-primary">Login</button>
    </div>
        {/* {navData} */}
    </ul>
</div>)

useEffect(() => {    
// const dbData = async () => {
        const url = "/about";
         axios.get(url)
            .then((DBdata) => {
                setNavData(<div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto pt-2">
                    <li className="nav-item">
                        <Link to="/" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3 active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/templates" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Templates</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">WishList</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Cart</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <Link style={{fontWeight: '600',fontSize:'15px'}} class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hello, {DBdata.data.firstname}
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link class="dropdown-item" to="/">Profile</Link></li>
                        <li><Link class="dropdown-item" to="/">About</Link></li>
                        <li><Link class="dropdown-item" to="/">Contact</Link></li>
                        <li><Link class="dropdown-item" to="/">LogOut</Link></li>
                    </ul>
                    </li>
                    {/* <div style={{marginTop: '-7px'}} className="btn">
                        <li className="nav-item dropdown">
                        <Link style={{fontWeight: '600',fontSize:'15px'}} className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {DBdata.data}
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">About</Link></li>
                            <li><Link className="dropdown-item" to="#">Contact</Link></li>
                            <li><Link className="dropdown-item" to="#">LogOut</Link></li>
                        </ul>
                        </li>
                </div> */}
                    {/* {navData} */}
                </ul>
            </div>)
            }).catch((e) => {
                console.log(e)
            })        
    }, [navigate])
    // console.log(database)
    
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand h1">ShrutikGraphics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {navData}
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2">
                            <li className="nav-item">
                                <Link to="/" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/templates" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Templates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" style={{fontWeight: '600',fontSize:'15px'}} className="nav-link px-3">Contact</Link>
                            </li>
                            <div style={{marginTop: '-7px'}} className="btn">
                                <li className="nav-item dropdown">
                                <Link style={{fontWeight: '600',fontSize:'15px'}} className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {navData}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="#">LogOut</Link></li>
                                </ul>
                                </li>
                        </div>
                            {navData}
                        </ul>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;



// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <>
//             <nav className="flex ">
//                 <div className="flex justify-between items-center shadow-md w-100 py-2">
//                     <div className="heading ">
//                         <Link to="/"><h3 className='px-3 font-bold'>SK-Graphics</h3></Link>
//                     </div>
//                     <ul className='flex'>
//                         <li className='px-4 py-1 font-medium'>
//                             <Link className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/">Home</Link>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <Link className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/about">About</Link>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <Link className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/contact">Contact</Link>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <Link className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/design">Design</Link>
//                             </li>
//                     </ul>
//                     <div className="buttons flex">
//                     <Link to="/login"><button className="px-3 py-2 border mx-3 hover:bg-violet-900 bg-violet-700 text-white rounded-lg">logIn</button></Link>
                        
                        
//                     <Link to="/signin"><button className="px-3 py-2 border hover:bg-violet-900 bg-violet-700 text-white rounded-lg mx-3">SignIn</button></Link>
                        
//                     </div>
//                 </div>

//             </nav>
//         </>
//     )
// }
