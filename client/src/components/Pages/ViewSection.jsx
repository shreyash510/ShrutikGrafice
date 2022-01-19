import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewSection = () => {
    const [pdata, setPdata] = useState([])

    const myUrl = useParams()
    console.log(myUrl.id)

    // const productData = async () => {
    useEffect(() => {
        const url = `/admin-data/${myUrl.id}`;
         axios.get(url)
            .then((PData) => {
                // console.log(PData.data)
                setPdata(PData.data)
            }).catch((e) => {
                console.log(e)
            })
    
        // productData()
    }, [myUrl.id])

    console.log(pdata.title)
return (
    <>
        <div style={{ width: '100%' }} className="container my-5">
            <div className="container row g-3 flex justify-center items-center">
                <div className="col-md-5 flex justify-center">
                    <img className='rounded-2xl w-[25em]' src={pdata.img} alt="BannerImage" />
                </div>
                <div className="col-md-5">
                    <p className='py-3 text-4xl text-center font-bold'>{pdata.title}</p>
                    <p className='pb-3 font-medium font-bold text-3xl text-center'>Price :{pdata.price}/-</p>
                    <p className='text-center font-medium'>? Numquam, consequatur. Ab et possimus voluptatem incidunt rem nostrum molestiae modi, ad corrupti amet repellat odit ipsam est itaque deserunt distinctio obcaecati architecto in ea velit rerum iusto alias! Incidunt, pariatur!</p>
                    <div className="btn flex justify-around">
                        <button className="btn btn-primary py-2 my-3 mx-1">Add To Cart</button>
                        <button className="btn btn-primary py-2 my-3 mx-1">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h1 className='font-bold text-3xl'>Related products</h1>
        </div>
    </>
)
}

export default ViewSection;