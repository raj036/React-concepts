import React, { useState } from "react";
import Todo from "./Todo";

//useState is used for managing state
//other thing we can say if we want to update the initial state we use useState hook

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <h1>
          Count {count}
        </h1>
        <button onClick={() => setCount(count + 1)}>Increment + 1</button>
        <button onClick={() => setCount(count - 1)}>Decrement - 1</button>
      </div>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default App;
