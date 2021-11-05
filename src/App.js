import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

const todos = [
  {text: "jorge", completed: true},
  {text: "alberto", completed: false},
  {text: "arias", completed: false},
  {text: "argüelles", completed: false}
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
