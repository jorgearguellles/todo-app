import { useState } from "react";
import AppUI from "./pages/AppUI";

const defaultTodos = [
  {text: "jorge", completed: true},
  {text: "alberto", completed: false},
  {text: "arias", completed: false},
  {text: "argüelles", completed: false}
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

// Método para marcar item como completado
const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};

// Método para eliminar item 
const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex,1);
  setTodos(newTodos);
};

  return (
    <AppUI 
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}  
      searchedTodos={searchedTodos}  
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
