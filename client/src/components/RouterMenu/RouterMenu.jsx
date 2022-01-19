import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import About from '../Pages/About';
import Admin from '../Pages/Admin';
import Contact from '../Pages/Contact';
import Templates from '../Pages/Templates';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ViewSection from '../Pages/ViewSection';
import AdminPanel from '../Pages/AdminPanel';

export default function RouterMenu() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />}  />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact={true} path="/templates" element={<Templates />} />
                <Route path="/templates/viewsection/:id" element={<ViewSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>

            
        </>
    )
}
