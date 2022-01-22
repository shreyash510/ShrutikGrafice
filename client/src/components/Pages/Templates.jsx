import React, { useEffect, useState } from 'react'
import CardStyle from '../items/CardStyle'
import axios from 'axios';
import DesignCategoriesTag from './DesignCategoriesTag'

export default function Templates() {
    const [database, setDatabase] = useState([]);

    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
                        return <CardStyle
                            key={v._id}
                            id={v._id}
                            img={v.image}
                            title={v.title}
                            DiscountPrice={v.DiscountPrice}
                            OriginalPrice={v.OriginalPrice}
                            // onSelect={orderNow}
                        />
                    })
                }
            </div>
        </>
    )
}