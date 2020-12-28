import React from 'react'
import FamiliaMembro from './FamilaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Ana Paula" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Paulo Cesar" {...props} />
            <FamiliaMembro nome="André" sobrenome="silva" />
        </div>
    )
}