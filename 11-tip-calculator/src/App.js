import {TipCalculator} from './components/TipCalculator.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [bill , setBill]=useState(0);
  const [rate1 , setRate1]=useState(0);
  const [rate2 , setRate2]=useState(0);


  console.log(bill);
  console.log(rate1);
  console.log(rate2);



  return (
    <div className="App">
        <TipCalculator/> 
      </div>
  );
}

export default App;
