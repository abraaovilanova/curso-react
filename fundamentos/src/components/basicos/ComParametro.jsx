import React from 'react'

export default function(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                O Aluno:{ props.aluno } tem nota <strong>{ props.nota }</strong> <br />
                e foi { status }
            </p>
        </div>
    )
}