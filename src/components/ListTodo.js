import React from 'react'

function ListTodo(props) {
  return (
    <li className='list-todo'>
      {props.items}
      <span className='icon'>
      <i className="fa-solid fa-trash-can"
      onClick={e=>{
        props.deleteItem(props.index)
      }}></i>
      </span>
    </li>
  )
}

export default ListTodo