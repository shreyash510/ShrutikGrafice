import React, { useEffect, useState } from 'react'
import DesignList from '../BannerTypes/DesignList';
import HomeDemo from '../BannerTypes/HomeDemo';
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
            <HomeDemo />
            <div className="flex flex-wrap justify-center">
                {
                    database.map((v) => {
                        return <DesignList
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
