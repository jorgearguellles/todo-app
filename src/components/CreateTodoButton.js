import React from 'react'
import "../styles/CreateTodoButton.css";

const CreateTodoButton = (props) => {

  const onClickButton = (msg) => {
    console.log(msg);
  };

  return (
      <button 
        className="CreateTodoButton"
        onClick={() => onClickButton()}
      >
        +
      </button>
  )
}

export default CreateTodoButton
