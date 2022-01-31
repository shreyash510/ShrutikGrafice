import React from 'react'
import { useNavigate } from 'react-router-dom';
import('../styling/Cardstyle.css')
// import { Link } from 'react-router-dom';

export default function CardStyle(props) {
    const navigate = useNavigate();
    return (
        <>

            <button onClick={() => {
                navigate(`/templates/viewsection/${props.id}`)
            }}>
                <div style={{ height: "fit-content" }} className="bannerList w-[14em] m-2 mx-2 rounded-2xl shadow-lg">
                    <div className="cardImg rounded-2xl h-full overflow-hidden ">
                        <div className="img w-[100%] h-auto">
                            <img className=' rounded-2xl' src={props.img} alt="BannerImage" />
                        </div>
                        {/* <div className="temp flex flex-col p-1 overflow-hidden items-center">
                            <div className="imgDetails overflow-hidden">
                                <p style={{ fontSize: '1.2em' }} className='font-bold text-center'>{props.title}</p>
                                <p className='p-2 font-medium text-1xl text-center '><s>Original Price :{props.OriginalPrice}/-</s></p>
                                <p className='pb-3 font-bold text-2xl text-center '>Price :{props.DiscountPrice}/-</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </button>
        </>
    )
}
