import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import About from '../Pages/About';
import Admin from '../Pages/Admin';
import Contact from '../Pages/Contact';
import Design from '../Pages/Design';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignIn from '../Pages/SignIn';
import ViewSection from '../Pages/ViewSection';

export default function RouterMenu() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />}  />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact={true} path="/design" element={<Design />} />
                <Route path="/design/viewsection/:id" element={<ViewSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>

            
        </>
    )
}
