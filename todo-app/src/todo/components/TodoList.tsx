
import TodoItem from "./TodoItem"
import { useTodos } from "../hooks/useTodos"


const TodoList = () => {
  // const { todoState } = useContext( TodoContext)
  // const { todos } = todoState
  const { todos } = useTodos()
  console.log(todos);
  

  return (
    <ul>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default TodoList