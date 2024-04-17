import React, {useState} from 'react';
import './App.css';

import { Output } from "./Output";
import { MemoOutput } from "./MemoOutput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  return (
    <div className="App">
      <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <button onClick={() => setOutputValue(inputValue)}>update</button>
      <Output outputValue={outputValue} />
      <MemoOutput outputValue={outputValue} />
    </div>
  );
}

export default App;
