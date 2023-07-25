// components/CourseDashboard.js

import React, { useState, useEffect } from 'react';
import './CourseDashboard.css';

const CourseDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course data from an API or data source
    const fetchCourses = async () => {
      // Replace this with  actual API call to fetch course data
      const data = await fetchDataFromAPI();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="course-dashboard-container">
      <h2>Course Dashboard</h2>
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button className="enroll-button">Enroll</button>
        </div>
      ))}
    </div>
  );
};

// Dummy function to simulate fetching data from an API
const fetchDataFromAPI = async () => {
  // You can modify this function to fetch course data from your actual API or data source
  const data = [
    {
      id: 1,
      title: 'Mathematics 101',
      description: 'Basic concepts of mathematics',
    },
    {
      id: 2,
      title: 'Introduction to Programming',
      description: 'Learn the fundamentals of programming',
    },
    {
      id: 3,
      title: 'History of Art',
      description: 'Explore the history of art through different periods',
    },
  ];

  return data;
};

export default CourseDashboard;
