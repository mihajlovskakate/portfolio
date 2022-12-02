import React from 'react'

function Textarea(props) {
  return (
    <div>
    <textarea
        className="input-message"
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        rows={5}
        required /></div>
  )
}

export default Textarea