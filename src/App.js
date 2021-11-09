import AppUI from "./pages/AppUI";
import { TodoProvider } from "./utils/TodoContext"

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
