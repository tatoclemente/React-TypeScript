import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | { type: "AddTodo"; payload: Todo }
  | { type: "ToggleTodo"; payload: { id: string } };

export const TodoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  console.log({ action });

  switch (action.type) {
    case "AddTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "ToggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
