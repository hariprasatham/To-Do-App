import React from 'react'

function TodoItem(props) {
  return (
    <div onClick={()=> props.deleteItem(props.id)}>
        <li>{props.text}</li>
    </div>
  )
}

export default TodoItem