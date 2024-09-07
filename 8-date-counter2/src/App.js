import { useState } from 'react';
import './App.css';


function Counter(){
  const [step , setStep]= useState(1);
  const [count , setcount]= useState(step === 1 ? 0: step);

  // Calculate the new date based on the current count
  const newDate = new Date();;
  newDate.setDate(newDate.getDate() + count);

  return (
    <div>

      <div className="steps">
          <input type="range" min ="1" max="10" value={step}
            onChange={(e)=>setStep(Number(e.target.value))} />
          <p> Step: {step}</p>
      </div>

      <div className="counts">
          <button className ="sub" onClick={()=>setcount(c => c-step)} > - </button>
          <input type="text"  value={count}
                onChange={(e)=>setcount(Number(e.target.value))} />
          <button className ="add" onClick={()=>setcount(c => c+step)} > + </button>
      </div>

      <div>
          <p className='dayesNum'>
              {count == 0 ? `Today is `:
              count > 0 ? `${count} dayes from Today is ` :
               `${count * -1} dayes ago was `}
              {newDate.toDateString() }
          </p>
      </div>

      <div>
          <button className="reset"
            onClick={()=>{setcount(c => 0); setStep(c=>0)} } > Reset</button>
      </div>
      </div>
  );
}

function App() {
  return (
    <div className="App">
    <Counter/>
    </div>
  );
}

export default App;
