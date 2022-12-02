import React from 'react'

function Input(props) {
    return (
        <div>
            <input className="input-name" required
            type={props.type} onChange={props.onChange} name={props.name} value={props.value} placeholder={props.placeholder}
            /></div>
    )
}

export default Input