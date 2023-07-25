import React, { useState, useEffect } from 'react';
import './LessonPlan.css';

const LessonPlan = ({ courseId }) => {
  const [lessonPlan, setLessonPlan] = useState([]);
  const [newLesson, setNewLesson] = useState({
    title: '',
    description: '',
    learningObjectives: [],
    resources: [],
  });

  useEffect(() => {
    // Fetch lesson plan data for the given courseId from an API or data source

    const fetchLessonPlan = async () => {

      // Can be replaced with the actual API call to fetch lesson plan data
      const data = await fetchDataFromAPI(courseId);
      setLessonPlan(data);
    };
    fetchLessonPlan();
  }, [courseId]);

  const handleLessonCompletion = (lessonId) => {
    // mark lesson plan
    setLessonPlan((prevLessonPlan) =>
      prevLessonPlan.map((lesson) => {
        if (lesson.id === lessonId) {
          return { ...lesson, completed: true };
        }
        return lesson;
      })
    );
  };

  const handleAddLesson = () => {
    // Add new lesson plan
    setLessonPlan((prevLessonPlan) => [
      ...prevLessonPlan,
      { ...newLesson, id: prevLessonPlan.length + 1, completed: false },
    ]);
    setNewLesson({
      title: '',
      description: '',
      learningObjectives: [],
      resources: [],
    });
  };

  return (
    <div className="lesson-plan">
      <h2>Lesson Plan</h2>
      {lessonPlan.map((lesson) => (
        <div key={lesson.id} className={`lesson ${lesson.completed ? 'completed' : ''}`}>
          <h3 className="lesson-title">{lesson.title}</h3>
          <p className="lesson-description">{lesson.description}</p>
          <p className="lesson-learning-objectives">
            Learning Objectives: {lesson.learningObjectives.join(', ')}
          </p>
          <p className="lesson-resources">Resources: {lesson.resources.join(', ')}</p>
          <button className="lesson-btn" onClick={() => handleLessonCompletion(lesson.id)}>
            {lesson.completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      ))}
      <div className="add-lesson">
        <h3>Add New Lesson Plan</h3>
        <input
          type="text"
          placeholder="Title"
          className="lesson-input"
          value={newLesson.title}
          onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="lesson-input"
          value={newLesson.description}
          onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Learning Objectives (comma-separated)"
          className="lesson-input"
          value={newLesson.learningObjectives.join(', ')}
          onChange={(e) =>
            setNewLesson({ ...newLesson, learningObjectives: e.target.value.split(', ') })
          }
        />
        <input
          type="text"
          placeholder="Resources (comma-separated)"
          className="lesson-input"
          value={newLesson.resources.join(', ')}
          onChange={(e) => setNewLesson({ ...newLesson, resources: e.target.value.split(', ') })}
        />
        <button className="add-lesson-btn" onClick={handleAddLesson}>
          Add Lesson
        </button>
      </div>
    </div>
  );
};

// Dummy function to simulate fetching data from an API


const fetchDataFromAPI = async (courseId) => {
  
  
  const data = [
    {
      id: 1,
      title: 'Introduction to Mathematics',
      description: 'Basic concepts and operations',
      learningObjectives: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
      resources: ['Textbook', 'Online videos'],
      completed: false,
    },
    {
      id: 2,
      title: 'Algebra Fundamentals',
      description: 'Equations and formulas',
      learningObjectives: ['Linear equations', 'Quadratic equations', 'Polynomials'],
      resources: ['Textbook', 'Practice problems'],
      completed: true,
    },
  ];

  return data;
};

export default LessonPlan;
