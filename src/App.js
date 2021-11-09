import { useState, useEffect } from "react";
import AppUI from "./pages/AppUI";

// const defaultTodos = [
//   {text: "jorge", completed: true},
//   {text: "alberto", completed: false},
//   {text: "arias", completed: false},
//   {text: "argüelles", completed: false}
// ];

function useLocalStorage( itemName, initialValue ){
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(
    () => {
      setTimeout( () => {
        try {
          // Persistencia de datos usando el LocalStorage. JSON.parse & JSON.stringify
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          };

          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      },2000);
    }
  );

  

  // Persistencia de datos vinculando la funcionalidad de marcar como hecho y eliminat todo
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
};


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V3', []);

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
    saveTodos(newTodos);
  };

  // Método para eliminar item 
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      error={error}
      loading={loading}
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
