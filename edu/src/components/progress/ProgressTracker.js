

import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="progress-tracker-container">
      <h2>Progress Tracker</h2>
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index + 1}
            className={`progress-step ${index + 1 === currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="step-navigation">
        <button onClick={handlePrevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={handleNextStep} disabled={currentStep === totalSteps}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressTracker;
