import React, { useEffect, useState } from 'react'
import CardStyle from '../items/CardStyle';
import HomeDemo from '../items/HomeDemo';
import axios from 'axios';

export default function Home() {
    const [database, setDatabase] = useState([])

    const dbData = async () => {
        const url = "http://localhost:8000/admin-data";
        await axios.get(url)
            .then((DBdata) => {
                setDatabase(DBdata.data)
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])

    return (
        <>

            <div className="container">
                <HomeDemo />
                <p className='text-4xl py-4 font-bold'>Popular Templates</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    database.map((v) => {
                        return <CardStyle
                            key={v._id}
                            id={v._id}
                            img={v.img}
                            title={v.title}
                            price={v.price}
                        />
                    })
                }
            </div>
        </>
    )
}
