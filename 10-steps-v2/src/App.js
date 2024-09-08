import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
    return (
      <>
      <Steps/>
      </>
    );
}

function Button ({ style, action , children}){
  return (
    <button style={style} onClick={action}>{children}</button>
  )
}

function Steps() {
  const [step ,setStep] =useState(1);
  const [isOpen ,setIsOpen] =useState(true);


  function handlePrevious() {
    step>1 && setStep((s)=>s - 1);
  }

  function handleNext() {
    step<3 &&  setStep((s)=>s + 1);
  }

  return (
    <>
      <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      { isOpen  && (
    <div className ="steps"> 
        <div className ="numbers"> 
            <div className={step >= 1? "active":"" }>1</div>
            <div className={step >= 2? "active":"" }>2</div>
            <div className={step >= 3? "active":"" }>3</div>
        </div>

        <p className="message"> Step : {step} : {messages[step-1]}</p>
          <div className="buttons">
        
          <Button style={{backgroundColor: "#7950f2" , color :"#fff"}} action={handlePrevious}>
              <span>👈</span>previous
          </Button>

          <Button style={{backgroundColor: "#7950f2" , color :"#fff"}} action={handleNext}>
            Next <span>👉</span>
            </Button>
          </div>
    </div>
)}
</>
  );
}

