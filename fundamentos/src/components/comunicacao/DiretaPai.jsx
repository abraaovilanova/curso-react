import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Abraão" idade={26} nerd={true}/>
            <DiretaFilho nome="João" idade={32} nerd={false}/>
        </div>
    )
}