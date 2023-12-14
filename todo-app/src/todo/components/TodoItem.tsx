// import { useContext } from "react"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"
// import { TodoContext } from "../context/TodoContext"

interface props {
    todo: Todo
}

const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext( TodoContext )

    const { toggleTodo } = useTodos()

 
    return (
    <li 
        style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
        onDoubleClick={() => toggleTodo(todo.id) }>
        {todo.description}
    </li>
  )
}

export default TodoItem