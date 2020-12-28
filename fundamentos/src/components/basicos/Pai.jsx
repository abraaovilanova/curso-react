import React, {cloneElement} from 'react'

export default props => {
    return (
        <div>
            {
                props.children.map( (child, id) => {
                    return cloneElement(child, {...props, key: id})
                })
            }
        </div>
    )
}