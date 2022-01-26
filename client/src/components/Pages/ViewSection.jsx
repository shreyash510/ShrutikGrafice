import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CardStyle from '../items/CardStyle';

import axios from 'axios';

const ViewSection = () => {
    const [pdata, setPdata] = useState([]);
    const [database, setDatabase] = useState([]);

    const myUrl = useParams()
    console.log(myUrl.id)

    // const productData = async () => {
    useEffect(() => {
        const url = `/create-product/${myUrl.id}`;
        axios.get(url)
            .then((PData) => {
                // console.log(PData.data)
                setPdata(PData.data)
            }).catch((e) => {
                console.log(e)
            })

        // productData()
    }, [myUrl.id])

    console.log(pdata.category)


    // call related banner 

    // const dbData = async () => {
        useEffect(() => {
        const url = "/create-product";
         axios.get(url)
            .then((DBdata) => {
                setDatabase(DBdata.data.filter((v)=>{
                    return v.category === `${pdata.category}`
                }))
            }).catch((e) => {
                console.log(e)
            })
    
    
        // dbData()
    }, [pdata])
    return (
        <>
            <div style={{ width: '100%' }} className="container my-5">
                <div className="container row g-3 flex justify-center items-center">
                    <div className="col-md-5 flex justify-center">
                        <img className='rounded-2xl w-[25em]' src={pdata.image} alt="BannerImage" />
                    </div>
                    <div className="col-md-5">
                        <p className='py-3 text-3xl text-center font-bold'>{pdata.title}</p>
                        {/* <div className="flex justify-around"> */}
                            <p className='pb-3 font-bold font-bold text-4xl text-center'>Price :{pdata.DiscountPrice}/-</p>
                            <p className='pb-3 font-medium font-bold text-1xl text-center'><s>Original Price :{pdata.OriginalPrice}/-</s></p>
                        {/* </div> */}
                        <p className='text-center font-medium'>{pdata.description}</p>
                        <div className="btn flex justify-around">
                            <button className="btn btn-primary py-2 my-3 mx-1">Add To Cart</button>
                            <button className="btn btn-primary py-2 my-3 mx-1">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className='font-bold text-3xl pb-4'>Related products</h1>
                {
                    <div className="flex flex-wrap items-center justify-center">
                    {
                        database.map((v) => {
                            return <CardStyle
                                key={v._id}
                                id={v._id}
                                img={v.image}
                                title={v.title}
                                DiscountPrice={v.DiscountPrice}
                                OriginalPrice={v.OriginalPrice}
                            />
                        })
                    })
                    </div>
                }
            </div>
        </>
    )
}

export default ViewSection;


