import {Bill} from './Bill.js';
import {Service} from './Service.js';
import {Result} from './Result.js';
import {Reset} from './Reset.js';
import { useState } from 'react';

export function TipCalculator() {
  const [bill , setBill]=useState(0);
  const [rate1 , setRate1]=useState(0);
  const [rate2 , setRate2]=useState(0);

  return (
    <div className="App">
        <Bill 
        bill={bill}onChangeBill={setBill}/>
        <Service rate={rate1} onRateChange={setRate1}>
          <p>How did You like the service?</p>
        </Service>

        <Service rate={rate2} onRateChange={setRate2}>
          <p>How did Your frind like the service?</p>
        </Service>
        <Result
          bill={Number(bill)}
          rate1={Number(rate1)}
          rate2={Number(rate2)}/>
          <Reset
          onChangeBill={setBill}
          onRate1Change={setRate1}
          onRate2Change={setRate2}/>
    </div>
  );
}