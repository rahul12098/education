// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseDashboard from './components/dashboard/CourseDashboard';
import LessonPlan from './components/Lessonplan/LessonPlan';
import Assignments from './components/assignments/Assignments';
import AssessmentMethods from './components/Assessment/AssessmentMethods';
import DiscussionForum from './components/Discussion/DiscussionForum';
import ProgressTracker from './components/progress/ProgressTracker';

const App = () => {
  return (
    <Router>
      <div className="app-container app-dark">
        <nav className="nav-bar nav-dark">
          <ul className="nav-links">
            <li>
              <Link to="/">Course Dashboard</Link>
            </li>
            <li>
              <Link to="/lessons">Lesson Plan</Link>
            </li>
            <li>
              <Link to="/assignments">Assignments</Link>
            </li>
            <li>
              <Link to="/assessment-methods">Assessment</Link>
            </li>
            <li>
              <Link to="/discussion-forum">Discussion</Link>
            </li>
            <li>
              <Link to="/progress-tracker">Progress Tracker</Link>
            </li>
          
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CourseDashboard />} />
          <Route path="/lessons" element={<LessonPlan />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/assessment-methods" element={<AssessmentMethods />} />
          <Route path="/discussion-forum" element={<DiscussionForum />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} /> 
     
        </Routes>
      </div>
    </Router>
  );
};

export default App;
