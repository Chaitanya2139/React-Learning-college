import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Course: {props.course}</h3>
    </div>
  )
}

export default Student
