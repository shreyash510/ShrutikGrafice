import React, { useEffect, useState } from 'react'
import CardStyle from '../items/CardStyle';
import HomeDemo from '../items/HomeDemo';
import axios from 'axios';
import Masonry from 'react-masonry-component';

export default function Home() {
    const [database, setDatabase] = useState([])

    const dbData = async () => {
        const url = "/create-product";
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
    const masonryOptions = { transitionDuration: 0}
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const showCard = database.map((v) => {
        return <CardStyle
            key={v._id}
            id={v._id}
            img={v.image}
            title={v.title}
            DiscountPrice={v.DiscountPrice}
            OriginalPrice={v.OriginalPrice}
        />
    })
    return (
        <>

            <div className="container">
                <HomeDemo />
                <p className='text-3xl py-4 font-bold'>Popular Templates</p>
            </div>
            <div className="container pl-[4%]">
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {showCard}
                </Masonry>
            </div>
        </>
    )
}
