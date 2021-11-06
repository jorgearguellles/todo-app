import React from 'react'
import "../styles/TodoSearch.css"

const TodoSearch = ( {searchValue, setSearchValue} ) => {
  
  const onSearchVelueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="TodoSearch"
      placeholder="Busca tu task" 
      value={searchValue}
      onChange={onSearchVelueChange}
    />
  )
}

export default TodoSearch
