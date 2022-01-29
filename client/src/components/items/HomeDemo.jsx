import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDemo() {
    const navigator = useNavigate()
    return (
        <>

            <div className="container my-5">
                <div className="homedemo flex justify-around row g-3">
                    <div className="col-md-5 h-full flex self-center rounded">
                        <img style={{width:'100%'}} className='rounded-2xl' src="https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?size=626&ext=jpg" alt="" />
                    </div>
                    <div className="col-md-6 flex flex-col items-center self-center">
                        <h3 className='font-bold text-2xl p-3 text-center' >skGraphics Creative Cloud Express</h3>
                        <h1 className='font-bold text-5xl text-center pb-4' >Shrutik Kolhe Graphics</h1>
                        <p className='text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque corporis voluptate maiores illum tenetur consequatur numquam obcaecati blanditiis aspernatur quia porro hic ipsam dolores optio et, ut dicta ex praesentium </p>
                        <button onClick={
                            ()=>{
                                navigator('/Login')
                            }
                        } className="btn btn-primary my-4">Create Banner Now</button>
                    </div>

                </div>
            </div>

        </>
    )
}
