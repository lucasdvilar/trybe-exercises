const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const namesAndAverages = students.map((name, index) => ({name: name, average: grades[index].reduce((acc, curr) => {
    return acc + curr;
  }, 0)/5}))

  return namesAndAverages;
}

console.log(studentAverage());