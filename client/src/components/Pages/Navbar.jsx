import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand h1">ShrutikGraphics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2">
                            <li className="nav-item">
                                <Link to="/" className="nav-link px-3 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/templates" className="nav-link px-3">Templates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link px-3">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link px-3">Contact</Link>
                            </li>
                            <div style={{marginTop: '-7px'}} className="btn">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <>
//             <nav className="flex ">
//                 <div className="flex justify-between items-center shadow-md w-100 py-2">
//                     <div className="heading ">
//                         <NavLink to="/"><h3 className='px-3 font-bold'>SK-Graphics</h3></NavLink>
//                     </div>
//                     <ul className='flex'>
//                         <li className='px-4 py-1 font-medium'>
//                             <NavLink className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/">Home</NavLink>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <NavLink className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/about">About</NavLink>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <NavLink className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/contact">Contact</NavLink>
//                             </li>
//                         <li className='px-4 py-1 font-medium'>
//                             <NavLink className="focus:outline-none focus: py-2 px-2 border-neutral-400 focus:border-b-4" to="/design">Design</NavLink>
//                             </li>
//                     </ul>
//                     <div className="buttons flex">
//                     <NavLink to="/login"><button className="px-3 py-2 border mx-3 hover:bg-violet-900 bg-violet-700 text-white rounded-lg">logIn</button></NavLink>
                        
                        
//                     <NavLink to="/signin"><button className="px-3 py-2 border hover:bg-violet-900 bg-violet-700 text-white rounded-lg mx-3">SignIn</button></NavLink>
                        
//                     </div>
//                 </div>

//             </nav>
//         </>
//     )
// }
