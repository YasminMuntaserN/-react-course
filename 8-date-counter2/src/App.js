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
      <input type="range" min ="0" max="10" />
      <div className="steps">
      <button className ="sub" onClick={()=>setStep(c => c-1)}> - </button>
      <p> Step: {step}</p>
      <button className ="add" onClick={()=>setStep(c => c+1)}> + </button>
      </div>

      <div className="counts">
      <button className ="sub" onClick={()=>setcount(c => c-step)} > - </button>
      <p> Count: {count}</p>
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
