import React, { useState, useEffect } from 'react';
import CardStyle from '../items/CardStyle'
import axios from 'axios';
import Masonry from 'react-masonry-component';


const BirthDay = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Birthday Banner"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
        return <CardStyle
            key={v._id}
            id={v._id}
            img={v.image}
            title={v.title}
            DiscountPrice={v.DiscountPrice}
            OriginalPrice={v.OriginalPrice}
        />
    })
    // console.log(birthday)
    // const newArray = birthday.filter((v) => {
    //     return v.category === "Wedding Card"       
    // })
    console.log(dbdata)
    return (
        <>
            <div className="container">
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const FestivelCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Festivel Banner"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const MarrageCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Wedding Card"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const MenuCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Menu Card"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const BusinessCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Business Card"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const InvitationCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Invitation Card"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const Logo = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Logo Design"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

const ElectionCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "/create-product";
        await axios.get(url)
            .then((DBdata) => {
                setDBdata(DBdata.data.filter((v) => {
                    return v.category === "Election Card"
                }))
            }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        dbData()
    }, [])
    const masonryOptions = { transitionDuration: 0 }
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const imageGallery = dbdata.map((v) => {
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
                <Masonry
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {imageGallery}
                </Masonry>
            </div>
        </>
    )
};

export { BirthDay, FestivelCard, Logo, InvitationCard, MarrageCard, MenuCard, BusinessCard, ElectionCard };
