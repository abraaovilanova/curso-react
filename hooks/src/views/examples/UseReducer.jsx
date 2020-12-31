import React, { useReducer } from 'react'
import PageTitle from '../../components/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
    switch(action.type){
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: 'Abraão' } }
        default: 
            return state
    }

}

const UseReducer = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes" />
            
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> : 
                    <span className="text">Sem usuário</span> }
                
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'login', name: 'Maria' }) }>Login</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'numberAdd2' }) }>+2</button>
                </div>
            </div>
            

        </div>
    )
}

export default UseReducer