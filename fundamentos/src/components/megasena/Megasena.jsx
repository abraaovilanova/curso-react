import React, {useState} from 'react'
import './Megasena.css'
import { gerarNumeroNaoContido, gerarNumeros } from './mega'

export default props => {

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)
   
    return (
        <div className="Mega">
           <h2>Megasena!</h2>
           <h3>{numeros.join(' ')}</h3>
            <div>
                <label># </label>
                <input min="6" max="15" type="number" value={qtde} onChange={e => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                    }}/>
            </div>

           <button onClick={()=> setNumeros(gerarNumeros(qtde))}>Gerar Valores!</button>
        </div>

    )
}