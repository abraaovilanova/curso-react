import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login }from '../../store/actions'
const UseReducer = props => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [numberInput, setNumberInput] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes" />
            
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> : 
                    <span className="text">Sem usuário</span> }
                
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => login(dispatch, 'Abraão') }>Login</button>
                    <button 
                        className="btn"
                        onClick={() => numberAdd2(dispatch) }>+2</button>
                </div>
                
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input 
                    type="number" 
                    className="input"
                    value={numberInput}
                    onChange={(e)=> setNumberInput(e.target.value)}/>
                <div>
                    <button className="btn" onClick={()=>dispatch({type: 'times7'})}>*7</button>
                    <button className="btn" onClick={()=>dispatch({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={()=>dispatch({type: 'parseint'})}>Int</button>
                    <button className="btn" onClick={()=>dispatch({type: 'n++', payload: {n: Number(numberInput)}})}>n++</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer