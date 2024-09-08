import {Bill} from './components/Bill.js';
import {Service} from './components/Service.js';
import {Result} from './components/Result.js';
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
        <Bill onChangeBill={setBill}/>
        <Service onRateChange={setRate1}>
          <p>How did You like the service?</p>
        </Service>
        <Service onRateChange={setRate2}>
          <p>How did Your frind like the service?</p>
        </Service>
        <Result
          bill={Number(bill)}
          rate1={Number(rate1)}
          rate2={Number(rate2)}/>
    </div>
  );
}

export default App;
