import React from 'react'


function Button(props) {
  return (
    <div><button className ="btn" type={props.type} onClick={props.onClick} id={props.id}>{props.text}</button></div>
  )
}

export default Button