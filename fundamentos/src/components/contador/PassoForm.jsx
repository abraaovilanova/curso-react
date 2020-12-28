import React from 'react'

export default props => {
    return (
    <div>
            <label htmlFor="passouInput">Passo</label>
            <input 
            id="passouInput" 
            type="number" 
            value={props.passo} 
            onChange={props.setPasso}/>
    </div>
    )
}