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
import Forgot from '../Pages/Forgot';
import { BirthDay, BusinessCard, ElectionCard, FestivelCard, InvitationCard, Logo, MarrageCard, MenuCard } from '../Pages/TemplateTages';
import ErrorPage from '../Pages/ErrorPage';

export default function RouterMenu() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />}  />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/templates/viewsection/:id" element={<ViewSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="*" element={<ErrorPage/>}/>


                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/create-items" element={<CreateProduct />} />


                <Route path="/templates/birthday" element={<BirthDay/>}></Route>
                <Route path="/templates/festivel" element={<FestivelCard/>}></Route>
                <Route path="/templates/logo" element={<Logo/>}></Route>
                <Route path="/templates/invitation" element={<InvitationCard/>}></Route>
                <Route path="/templates/marrage" element={<MarrageCard/>}></Route>
                <Route path="/templates/menu" element={<MenuCard/>}></Route>
                <Route path="/templates/business" element={<BusinessCard/>}></Route>
                <Route path="/templates/election" element={<ElectionCard/>}></Route>
            </Routes>

            
        </>
    )
}
