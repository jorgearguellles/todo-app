import React, { useContext } from 'react'
import "../styles/TodoCounter.css";
import { TodoContext } from '../utils/TodoContext';

const TodoCounter = () => {
  const {totalTodos, completedTodos} = useContext(TodoContext);  

  return (
    <h2 className="title">
      Haz completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
};

export default TodoCounter
