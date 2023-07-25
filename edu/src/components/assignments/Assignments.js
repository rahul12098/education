// components/Assignments.js

import React, { useState, useEffect } from 'react';
import './Assignments.css';

const Assignments = ({ lessonId }) => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignment data for the given lessonId from an API or data source
    const fetchAssignments = async () => {
      // Replace this with  actual API call to fetch assignments
      const data = await fetchDataFromAPI(lessonId);
      setAssignments(data);
    };
    fetchAssignments();
  }, [lessonId]);

  const handleAssignmentSubmission = (assignmentId, submission) => {
    // Implement the logic to handle assignment submission (e.g., send data to the server)
    // For simplicity, we'll just console log the submission here
    console.log('Assignment Submission:', submission);
  };

  return (
    <div className="assignments-container">
      <h2>Assignments</h2>
      {assignments.map((assignment) => (
        <div className="assignment-card" key={assignment.id}>
          <h3>{assignment.title}</h3>
          <p>{assignment.description}</p>
          <p>Deadline: {assignment.deadline}</p>
          <p>Submission Guidelines: {assignment.submissionGuidelines}</p>
          <input type="file" onChange={(e) => handleAssignmentSubmission(assignment.id, e.target.files[0])} />
          <button onClick={() => handleAssignmentSubmission(assignment.id, null)}>Submit</button>
        </div>
      ))}
    </div>
  );
};

// Dummy function to simulate fetching data from an API
const fetchDataFromAPI = async (lessonId) => {
  // You can modify this function to fetch assignments for the given lessonId
  // from your actual API or data source
  const data = [
    {
      id: 1,
      title: 'Assignment 1',
      description: 'Complete the exercise',
      deadline: '2023-07-30',
      submissionGuidelines: 'Upload your solution as a PDF',
    },
    {
      id: 2,
      title: 'Assignment 2',
      description: 'Write a report',
      deadline: '2023-08-10',
      submissionGuidelines: 'Submit as a Word document',
    },
  ];

  return data;
};

export default Assignments;
