import React from 'react'

export default ({ name, completed, onClick}) => 
(<li style={{ cursor: "pointer", textDecoration: completed ? "line-through" : "none" }}
  onClick={onClick} >{name}</li>)