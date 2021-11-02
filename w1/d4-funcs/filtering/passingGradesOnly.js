// provided set if grades
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// function used to go through array and using the filter method, only return grades 70 and higher.
const passing = grades.filter((grade) => {
  return grade > 69;
});
console.log("Grades that have passed:", passing);