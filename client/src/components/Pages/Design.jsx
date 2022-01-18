import React, { useEffect, useState } from 'react'
import DesignList from '../BannerTypes/DesignList'
import axios from 'axios';
import DesignCategoriesTag from './DesignCategoriesTag'

export default function Design() {
    const [database, setDatabase] = useState([]);

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
    console.log(database)

    // const orderNow=(_id)=>{
    //     console.log('button is clicked',_id)
    // }
    return (
        <>
            <DesignCategoriesTag />
            <div className="flex flex-wrap justify-center">
                {
                    database.map((v) => {
                        return <DesignList
                            key={v._id}
                            id={v._id}
                            img={v.img}
                            title={v.title}
                            price={v.price}
                            // onSelect={orderNow}
                        />
                    })
                }
            </div>
        </>
    )
}