import React from 'react'

export default (props) => {
    {/* desconstructor */}
    const { min, max } = props

    const aleatorio = parseInt(Math.random()*(max - min)) + min
    return (
        <>
          <p>O max: {max} min: {min} </p>
          <p>O número aleatorio gerado é igual a : {aleatorio} </p>  
        </>
    )
}