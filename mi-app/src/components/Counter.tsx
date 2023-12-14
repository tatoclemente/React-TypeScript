import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = ( number: number = 1 ):void => {
    setCounter(counter + number);
    // console.log(number);
    
  }

  return (
    <div className="mt-5">
      <h3>Counter:</h3>
      <span>Valor: { counter } </span>
      <hr />
      <button 
        onClick={ () => increment(1) }
        className="btn btn-outline-primary mt-2">
        +1
      </button>
      <button 
        onClick={ () => increment(2) }
        className="btn btn-outline-primary mt-2">
        +2
      </button>
      <button 
        onClick={ () => setCounter(0) }
        className="btn btn-outline-danger mt-2">
        Reset
      </button>
    </div>
  );
};

export default Counter;
