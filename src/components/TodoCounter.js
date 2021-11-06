import React from 'react'
import "../styles/TodoCounter.css";

const TodoCounter = ( {total, completed} ) => {
  return (
    <h2 className="title">
      Haz completado {completed} de {total} TODOs
    </h2>
  )
};

export default TodoCounter
