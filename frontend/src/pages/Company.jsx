import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Company() {
    const [data, setData] = useState({});
    const [about, setAbout] = useState({});
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ignite-25g9.onrender.com/companies/' + id)
            const data = await response.json()
            setData(data)
            setAbout(data.about)

        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.image}</h1>
            <div>
                {
                    Object.entries(about).map(([key, value]) => {
                        return (
                            <div key={key}>
                                <h1>{key} : {value}</h1>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Company
