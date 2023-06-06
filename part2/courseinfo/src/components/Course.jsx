import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => (acc += curr.exercises), 0);

  return (
    <>
      <Header course={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={total} />
    </>
  );
};

export default Course;
