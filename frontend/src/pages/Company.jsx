import React from 'react'
import { useParams } from 'react-router-dom'


function Company() {
    const { id } = useParams();
    return (
        <div>
            <h1>This is Company page. Company ID: {id} </h1>
        </div>
    )
}

export default Company
