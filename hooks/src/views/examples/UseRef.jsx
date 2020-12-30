import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

/*
const merge = function(s1,s2){
    const s3 = []
    for (let i = 0; i < s1.length; i++){
            s3.push(s1[i])
            s3.push(s2[i] || '')
    }

    return s3
} */


const merge = function(s1, s2){
    return [...s1].map((e, i) => `${e}${s2[i] || ''}`).join('')
}

const UseRef = props => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    
    const count = useRef(0)
    const myImput1 = useRef(null)
    const myImput2 = useRef(null)

   //count.current++

   useEffect(function(){
        count.current++
        myImput2.current.focus()
   },[value1])

   useEffect(function(){
        count.current++
        myImput1.current.focus()
   },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto multável com a propriedade .current!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div className="center">
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)}</span>
                    <span className="text red">{count.current}</span>
                </div>
                <input 
                    type="text" 
                    className="input"
                    ref={myImput1}
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input"
                    ref={myImput2}
                    value={value2} onChange={e => setValue2(e.target.value)} />

            </div>
        </div>


    )
}

export default UseRef