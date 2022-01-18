import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewSection = () => {
    const [pdata, setPdata] = useState([])

    const myUrl = useParams()
    console.log(myUrl.id)

    const productData = async () => {
        const url = `/admin-data/${myUrl.id}`;
        await axios.get(url)
            .then((PData) => {
                // console.log(PData.data)
                setPdata(PData.data)
            }).catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        productData()
    }, [])

    console.log(pdata.title)
    return (
        <>
            <div className="container flex flex-col justify-center">
                <div className=" my-5 justify-around shadow-xl rounded-3xl w-[90%] p-5 flex flex-wrap">
                    <div className="left-side w-50">
                        <div className="img w-[70%] h-auto flex flex-col">
                            <img className='rounded-2xl' src={pdata.img} alt="BannerImage" />
                        </div>
                    </div>
                    <div className="right-side w-50 px-4">
                        <h1 className="title font-bold text-5xl px-4 text-center">{pdata.title}</h1>
                        <p className='font-bold text-3xl text-center my-4'>Price: {pdata.price}/-</p>
                        <p className='text-center'>? Numquam, consequatur. Ab et possimus voluptatem incidunt rem nostrum molestiae modi, ad corrupti amet repellat odit ipsam est itaque deserunt distinctio obcaecati architecto in ea velit rerum iusto alias! Incidunt, pariatur!</p>
                        <div className="btn flex justify-around">
                            <button className="btn btn-primary py-2 my-3 mx-1">Add To Cart</button>
                            <button className="btn btn-primary py-2 my-3 mx-1">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className='font-bold text-3xl'>Related products</h1>
                </div>
            </div>
        </>
    )
}

export default ViewSection;