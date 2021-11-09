import React, { useContext } from 'react';
import { TodoContext } from "../utils/TodoContext";
import "../styles/TodoSearch.css";

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext);
  
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
