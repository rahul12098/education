// components/AssessmentMethods.js

import React, { useState } from 'react';
import './AssessmentMethods.css';

const AssessmentMethods = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']); // Array to store question options
  const [quizStarted, setQuizStarted] = useState(false); // State to track quiz start

  // Function to handle adding a new question to the quiz
  const handleAddQuestion = () => {
    setQuestions([...questions, { question: newQuestion, options }]);
    setNewQuestion('');
    setOptions(['', '', '']); // Reset options array
    setQuizStarted(true); // Start the quiz once a question is added
  };

  // Function to handle selecting an option for a question
  const handleOptionChange = (questionIndex, optionIndex) => {
    // Update the options array for the selected question
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].selectedOption = optionIndex;
      return updatedQuestions;
    });
  };

  // Function to handle submitting the quiz
  const handleSubmitQuiz = () => {
    // You can implement the logic to grade the quiz and handle the submission here
    console.log('Quiz submitted:', questions);
  };

  return (
    <div className="assessment-methods">
      <h2>Assessment Methods</h2>
      <div className="quiz-form">
        <h3>Add Quiz Question</h3>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter your question"
        />
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => {
                // Update the options array when an option is entered
                const updatedOptions = [...options];
                updatedOptions[index] = e.target.value;
                setOptions(updatedOptions);
              }}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
        <button className="add-option-btn" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>

      {quizStarted && (
        <div className="quiz-questions">
          <h2>Quiz</h2>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question">
              <h3>{question.question}</h3>
              <ul className="question-options">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      checked={question.selectedOption === optionIndex}
                      onChange={() => handleOptionChange(questionIndex, optionIndex)}
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="submit-quiz-btn" onClick={handleSubmitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentMethods;
