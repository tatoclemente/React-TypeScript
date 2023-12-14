import { TodoContext } from "./TodoContext";
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      description: "Pasear al perro",
      completed: false,
    },
    {
      id: "2",
      description: "Comprar pan",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {

  const [todoState, dispatch] = useReducer( TodoReducer,INITIAL_STATE)

  const toggleTodo = (id: string) => {
    dispatch({type: 'ToggleTodo', payload: { id }})
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
