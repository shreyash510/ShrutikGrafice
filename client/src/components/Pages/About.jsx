import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function About() {
    const [database, setDatabase] = useState([])

    const dbData =async () => {
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
    database.map((v)=>{
       return console.log(v)
    })
    return (
        <>
            <h1>About</h1>
        </>
    )
}
