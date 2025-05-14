import React from 'react'

 function Student (props) {
  return (
    <div>
      <div className='info'>
        <h2>Name: {props.name} </h2>
        <h3>Roll: {props.roll} </h3>
      </div>
    </div>
  )
}


export default student
