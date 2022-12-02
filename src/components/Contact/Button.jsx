import React from 'react'


function Button(props) {
  return (
    <div><button className ="btn" type={props.type} onClick={props.onClick}>{props.text}</button></div>
  )
}

export default Button