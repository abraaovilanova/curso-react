import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

function calcFatorial(num){
    const numero = parseInt(num)
    if(numero < 0) return -1
    if (numero === 0) return 1
    return calcFatorial(numero-1)*numero
}

const UseEffect = props => {
    const [number, setNumber] = useState(1)

    const [fatorial,setFatorial] = useState(1)

    useEffect(function(){
        setFatorial(calcFatorial(number))

    }, [number])

    useEffect(function(){
        if (fatorial > 1000000){
            document.title = 'Eita!'
        }

    },[fatorial])

    // Exemplo 02
    const [status, setStatus] = useState('Impar')
    const [numberTwo, setNumberTwo] = useState(1)

    useEffect(function(){
        if (numberTwo % 2 == 0){
            setStatus('Par')
        }else{
            setStatus('Impar')
        }
    },[numberTwo])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais" />

                <SectionTitle title="Exercício #01" />
                <div className="center">
                    <div>
                            <span className="text">Fatorial:</span>
                            <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                    </div>
                    <input className="input" value={number} onChange={e => setNumber(e.target.value)} type="number" />

                </div>
                <SectionTitle title="Exercício #02" />
                <div className="center">
                    <div>
                            <span className="text">Status:</span>
                            <span className="text red">{status}</span>
                    </div>
                    <input className="input" value={numberTwo} onChange={e => setNumberTwo(e.target.value)} type="number" />

                </div>

                
        </div>
    )
}

export default UseEffect