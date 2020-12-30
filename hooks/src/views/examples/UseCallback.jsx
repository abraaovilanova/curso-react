import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = props => {
    const [count, setCount] = useState(0)

    const inc = useCallback( function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!" />
            
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>

        </div>

    )
}

export default UseCallback