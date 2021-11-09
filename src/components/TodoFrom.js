import React, { useState, useContext } from 'react'
import { TodoContext } from '../utils/TodoContext';
import "../styles/TodoForm.css";

const TodoFrom = () => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label> Escribte tu nuevo TODO </label>
      <textarea 
        placeholder="Estudiar para el examen"
        onChange={onChange}
        value={newTodoValue}
      />
      <div className="TodoForm-buttonContainer">  
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button-add" >Añadir</button>
      </div>
    </form>
  )
}

export default TodoFrom;
