import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType = 
  | {type: "INCREMENTAR"}
  | {type: "DECREMENTAR"}
  | {type: "CUSTOM", payload: number}


const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        contador: state.contador + 1,
      };
      case "DECREMENTAR":
        return {
          ...state,
          contador: state.contador - 1,
        };
      case "CUSTOM":
        return {
          ...state,
          contador: action.payload,
        }

    default:
      return state;
  }
};

const ContadorRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h2>Contador: {contador}</h2>
      <button
        onClick={() => dispatch({ type: 'INCREMENTAR' })}
        className="btn btn-outline-primary"
      >
        Incrementar
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENTAR' })}
        className="btn btn-outline-primary"
      >
        Decrementar
      </button>
      <button
        onClick={() => dispatch({ type: 'CUSTOM', payload: 100 })}
        className="btn btn-outline-danger"
      >
        100
      </button>
    </>
  );
};

export default ContadorRed;
