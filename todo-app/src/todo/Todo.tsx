import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";
// import { useTodos } from "./hooks/useTodos";

const Todo = () => {
  // useTodos()

  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
