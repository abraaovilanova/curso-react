import React from 'react'
import { useParams } from 'react-router-dom'


const Param = props => {
    const { id } = useParams()
    return (
        <div className="Home">
            <h1>Parametro 1</h1>
            <h2>valor: { id } </h2>
        </div>
    )
}

export default Param