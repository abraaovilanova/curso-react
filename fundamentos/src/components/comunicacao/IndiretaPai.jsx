import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
const [nome, setNome] = useState('?')
const [idade, setIdade] = useState(0)
const [nerd, setNerd] = useState(false)


    function infrmacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <>
        <div>
                <span> {nome} </span>
                <span> {idade} </span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>

        </div>
        <div>
            <IndiretaFilho quandoClicar={infrmacoes} nome="Ana Paula"/>
        </div>
        </>
    )
}