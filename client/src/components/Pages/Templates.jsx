import React from 'react'
// import CardStyle from '../items/CardStyle'
// import axios from 'axios';
import { BirthDay, BusinessCard, ElectionCard, FestivelCard, InvitationCard, Logo, MarrageCard, MenuCard } from './TemplateTages';

export default function Templates() {
    // const [database, setDatabase] = useState([]);

    // const dbData = async () => {
    //     const url = "http://localhost:8000/create-product";
    //     await axios.get(url)
    //         .then((DBdata) => {
    //             setDatabase(DBdata.data)
    //         }).catch((e) => {
    //             console.log(e)
    //         })
    // }
    // useEffect(() => {
    //     dbData()
    // }, [])
    // console.log(database)
    // const orderNow=(_id)=>{
    //     console.log('button is clicked',_id)
    // }
    return (
        <>
            <div className="flex flex-wrap justify-center items-center">
                <BirthDay />
                <FestivelCard />
                <MarrageCard />
                <MenuCard />
                <BusinessCard />
                <InvitationCard />
                <Logo />
                <ElectionCard />
            </div>
        </>
    )
}