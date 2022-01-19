import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import About from '../Pages/About';
import Admin from '../Pages/AdminSide/Admin';
import Contact from '../Pages/Contact';
import Templates from '../Pages/Templates';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ViewSection from '../Pages/ViewSection';
// import Admin from '../Pages/AdminSide/Admin';
import Orders from '../Pages/AdminSide/Orders';
import CreateProduct from '../Pages/AdminSide/CreateProduct';

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
                {/* <Route path="/admin" element={<Admin />} /> */}


                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/create-items" element={<CreateProduct />} />
            </Routes>

            
        </>
    )
}
