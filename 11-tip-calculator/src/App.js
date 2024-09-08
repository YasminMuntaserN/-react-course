import {Bill} from './components/Bill.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [bill , setBill]=useState(0);

  return (
    <div className="App">
        <Bill onChangeBill={setBill}/>
    </div>
  );
}

export default App;
