import React from 'react'
import "../styles/TodoSearch.css"

const TodoSearch = () => {
  const onSearchVelueChange = (event) => {
    console.log(event.target.value)
  }
  return (
      <input 
        className="TodoSearch"
        placeholder="Busca tu task" 
        onChange={onSearchVelueChange}
      />
  )
}

export default TodoSearch
