import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const  UseCustom = props => {

    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states){
        return states.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div>
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook" />
            
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={()=> inc()}>+1</button>
                    <button className="btn" onClick={()=> dec()}>-1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>

            </div>
        </div>
    )
}

export default UseCustom