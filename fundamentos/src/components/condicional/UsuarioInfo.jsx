import React from 'react'
import If, {Else} from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={ usuario.nome}>
                Seja bem Vindo <strong>{ usuario.nome }</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>
                </Else>
            </If>
        </div>
    )
}