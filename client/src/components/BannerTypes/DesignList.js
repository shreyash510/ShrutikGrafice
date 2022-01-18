import React from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DesignList(props) {
    const navigate = useNavigate();
    return (
        <>
            <div style={{height:"fit-content"}} className="bannerList w-[15em] m-2 rounded-lg shadow-lg ">
                <div className="card1 rounded-2xl h-full rounded overflow-hidden">
                    <div className="img w-[100%] h-auto">
                        <img className='rounded-2xl' src={props.img} alt="BannerImage" />
                    </div>
                    <div className="temp flex flex-col p-2 overflow-hidden items-center ">
                        <p className='py-3 font-bold text-2xl text-center'>{props.title}</p>
                        <p className='pb-3 font-medium text-1xl text-center '>Price :{props.price}/-</p>
                        <button className="mb-3 btn btn-primary" onClick={()=>{
                            // props.onSelect(props.id), 
                            navigate(`/design/viewsection/${props.id}`)
                            // console.log('btn is click')
                        }}>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
