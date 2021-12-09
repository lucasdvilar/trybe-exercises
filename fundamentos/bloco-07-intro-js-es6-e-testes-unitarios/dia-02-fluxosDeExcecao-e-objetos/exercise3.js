const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (object, key, value) => {
  object[key] = value;
  console.log(lesson2);
}

addShift(lesson2, 'turno', 'noite');

const listKeys = (object) => {
  console.log(Object.keys(object));
}

listKeys(lesson3);

const showObjLength = (object) => {
  console.log(Object.keys(object).length);
}

showObjLength(lesson1);

const listValues = (object) => Object.values(object);

console.log(listValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const sumStudents = (object) => {
  const lessons = Object.keys(object);
  
  let total = 0;
  for (let lesson of lessons) {
    total += object[lesson].numeroEstudantes;
  }

  return total;
}

console.log(sumStudents(allLessons));

const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, key, value) => object[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
/* this can also be done with entries:
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos')); */

const countMathStudents = (object) => {
  const lessons = Object.keys(object);

  let total = 0;
  for (let lesson of lessons) {
    if (object[lesson].materia === 'Matemática') {
      total += object[lesson].numeroEstudantes;
    }
  }

  return total
}

console.log(countMathStudents(allLessons));

const createReport = (object, teacher) => {
  const report = {}
  report.professor = teacher;
  report.aulas = [];
  report.estudantes = 0;

  const lessons = Object.keys(object);
  for (let lesson of lessons) {
    if (object[lesson].professor === teacher) {
      report.aulas.push(object[lesson].materia);
      report.estudantes += object[lesson].numeroEstudantes;
    }
  }

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
/* using assing:
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara')); */