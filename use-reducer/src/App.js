import React, { useReducer } from "react";
import TaskTwo from "./TaskTwo";


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Counter: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      </div>
      <h2>
        Task Two
      </h2>
      <TaskTwo />
    </>
  );
};

export default App;