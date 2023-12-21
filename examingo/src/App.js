import React from 'react';
import books from './books.png';
import './App.css';
import Questions from './popups/Questions';
import { useState } from 'react';

function App() {
  const [questionsButton, setQuestionsButton] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score,setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={books} className="App-books" alt="books" />
        <p className="MiddleText">
          <b>Examingo</b>
        </p>
        <button className="button" onClick={() => setQuestionsButton(true)}>Generate Questions</button>
        <Questions trigger={questionsButton} setTrigger={setQuestionsButton}>
          {showFinalResults ? (
            <div className='final-results'>
            <h3>Final Results</h3>
            <a>{currentQuestion + 1} out of {questions.length} correct - (20%)</a>
          </div>
          ) : (
          <div>
          <h3 className="Questions">Question {currentQuestion + 1} out of {questions.length}</h3>
          <h4 className='Question' >{questions[currentQuestion].text}</h4>
          <ul className="SpaceForQuestions">
            {questions[currentQuestion].options.map((option) => {
              return(
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              );
            })}
            </ul>
          </div>
          )
          }
        </Questions>
      </header>
    </div>
  );
}

export default App;
