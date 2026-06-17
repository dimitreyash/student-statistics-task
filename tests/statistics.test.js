import test from 'node:test';
import assert from 'node:assert/strict';
import { getStudentStatistics } from '../src/solution.js';

test('calculates average grade and finds the best student', () => {
  const students = [
    { name: 'Ivan', grades: [5, 4, 5] },
    { name: 'Anna', grades: [3, 4, 5] },
    { name: 'Max', grades: [5, 5, 5] }
  ];

  assert.deepEqual(getStudentStatistics(students), {
    averageGrade: 4.56,
    bestStudent: 'Max'
  });
});

test('works with one student', () => {
  const students = [
    { name: 'Kate', grades: [4, 4, 5] }
  ];

  assert.deepEqual(getStudentStatistics(students), {
    averageGrade: 4.33,
    bestStudent: 'Kate'
  });
});

test('returns default values for empty array', () => {
  assert.deepEqual(getStudentStatistics([]), {
    averageGrade: 0,
    bestStudent: null
  });
});