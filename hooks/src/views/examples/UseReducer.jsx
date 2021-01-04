import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
    switch(action.type){
        case 'times7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'parseint':
            return { ...state, number: parseInt(state.number)}
        case 'n++':
            return { ...state, number: state.number + action.payload.n }
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default: 
            return state
    }

}

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
                        onClick={() => dispatch({type: 'login', payload: 'Maria' }) }>Login</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'numberAdd2' }) }>+2</button>
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