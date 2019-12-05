import React, {useState} from 'react';
import './App.css';

function App() {

  //---- Using react hooks ----//
        const [count, setCount] = useState(0)

  //---- Create a function ----//
        const increment = () => {
          setCount(count + 1)
        }
        
        let decrement = () => {
          setCount(count - 1)
        }

  return (
    <div className="App">

    {/* calling count as a h1 */}
      <h1>{count}</h1>
    
    {/* setting a button with the function linked to change the outcome */}
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement</button>
    </div>
  );
}

export default App;
