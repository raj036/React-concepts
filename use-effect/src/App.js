import { useEffect } from 'react';
import './App.css';
import TaskTwo from './TaskTwo';

//UseEffect is used for side effects ,fetching data and directly updating the dom
//useEffect accepts 2 arguments , 1 is function and the 2 is dependency 
// if we use empty dependency of array in usefeffect it will render only once when the component is mounted , but if we dont use dependency then the useeffect will continously renders
// and if we pass any dependency then whenever the component will get called then the useeffect will get render

function App() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted")
    }
  }, [])
  return (
    <>
      <div >
        Message
      </div>
      <TaskTwo />
    </>
  );
}

export default App;
