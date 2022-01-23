import React, { useState, useEffect } from 'react';
import CardStyle from '../items/CardStyle'
import axios from 'axios';



const BirthDay = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    // console.log(birthday)
    // const newArray = birthday.filter((v) => {
    //     return v.category === "Wedding Card"       
    // })
    console.log(dbdata)
    return (
        <>
            <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const FestivelCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
           <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const MarrageCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const MenuCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const BusinessCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const InvitationCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const Logo = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

const ElectionCard = () => {
    const [dbdata, setDBdata] = useState([]);
    const dbData = async () => {
        const url = "http://localhost:8000/create-product";
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
    return (
        <>
             <div className="flex flex-wrap justify-center">
            {
                dbdata.map((v) => {
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
        </>
    )
};

export { BirthDay, FestivelCard, Logo, InvitationCard, MarrageCard, MenuCard, BusinessCard, ElectionCard };
