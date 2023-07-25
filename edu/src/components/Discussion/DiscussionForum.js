// components/DiscussionForum.js

import React, { useState } from 'react';
import './DiscussionForum.css';

const DiscussionForum = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionSubmit = () => {
    // Implement the logic to submit a new question (e.g., update database)
    // For simplicity, we'll just add it to the local state here
    setQuestions([...questions, newQuestion]);
    setNewQuestion('');
  };

  return (
    <div className="discussion-forum-container">
      <h2>Discussion Forum</h2>
      <div className="question-form">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleQuestionSubmit}>Post</button>
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
          <div className="question-card" key={index}>
            <h3>Question {index + 1}</h3>
            <p>{question}</p>
            {/* Implement answers functionality */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
