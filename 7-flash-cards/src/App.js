import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Question({ question}) {
  const [selectedId, setSelectedId] = useState(null); // Track selected question by ID
  const [isSelected, setIsSelected] = useState(false); 

  return(  <div
      key={question.id}
      onClick={() => {
        setSelectedId(question.id); // Set selected ID to the clicked question's ID
        setIsSelected(!isSelected);
      }}
      className={selectedId === question.id && isSelected? "selected" : ""} // Apply 'selected' class only to the selected question
    >
      {isSelected ? question.answer:question.question}
    </div>
  );
}

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}