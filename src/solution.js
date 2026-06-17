export function getStudentStatistics(students) {
  if (students.length === 0) {
    return {
      averageGrade: 0,
      bestStudent: null
    };
  }

  let totalSum = 0;
  let totalGradesCount = 0;

  let bestStudent = null;
  let bestAverage = -Infinity;

  for (const student of students) {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / student.grades.length;

    totalSum += sum;
    totalGradesCount += student.grades.length;

    if (average > bestAverage) {
      bestAverage = average;
      bestStudent = student.name;
    }
  }

  return {
    averageGrade: Number((totalSum / totalGradesCount).toFixed(2)),
    bestStudent
  };
}