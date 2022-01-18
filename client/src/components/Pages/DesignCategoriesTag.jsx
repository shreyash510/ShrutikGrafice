import React from 'react'
import { NavLink} from 'react-router-dom'

export default function DesignCategoriesTag() {
    return (
        <>
            
        <div className="categorys flex flex-wrap py-3 items-center justify-center">
            <NavLink to='/design/birthday'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>BirthDay Banner</li></NavLink>
            <NavLink to='/design/festivel'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Festivel Banner</li></NavLink>
            <NavLink to='/design/logo'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Logo Design</li></NavLink>
            <NavLink to='/design/invitation'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Invitation Card</li></NavLink>
            <NavLink to='/design/merrage'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Marrage Card</li></NavLink>
            <NavLink to='/design/menu'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Menu Card</li></NavLink>
            <NavLink to='/design/visiting'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Visiting Card</li></NavLink>
            <NavLink to='/design/business'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Business Card</li></NavLink>
            <NavLink to='/design/election'><li className='font-semibold p-2 border border-black list-none m-2 rounded-2xl'>Election Card</li></NavLink>
        </div> 
        </>
    )
}
