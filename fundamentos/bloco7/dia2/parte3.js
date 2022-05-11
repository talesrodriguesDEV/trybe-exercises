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

// const addEntries = (object, key, value) => {
//   object[key] = value;
// }
// addEntries(lesson2, 'turno', 'noite');
// console.log(lesson2);

// const listObjectKeys = (object) => {
//   console.log(Object.keys(object));
// }
// listObjectKeys(lesson1);

// const objectSize = (object) => {
//   const array = Object.entries(object);
//   let cont = 0;
//   for (let index of array) {
//     cont += 1;
//   }
//   return cont;
// }
// console.log(objectSize(lesson3));

// const listObjectValues = (object) => {
//   console.log(Object.values(object));
// }
// listObjectValues(lesson1);

// const allLessons = {
//   lesson1: lesson1,
//   lesson2: lesson2,
//   lesson3: lesson3,
// };
// // const allLessons = Object.assign(lesson1, lesson2, lesson3);
// console.log(allLessons);

// const totalStudents = (object) => {
//   let total = 0;
//   total += allLessons.lesson1.numeroEstudantes;
//   total += allLessons.lesson2.numeroEstudantes;
//   total += allLessons.lesson3.numeroEstudantes;
//   return total;
// }
// console.log(totalStudents(allLessons));

// const getValueByKeyPosition = (object, position) => {
//   const array = ['materia', 'numeroEstudantes', 'professor', 'turno'];
//   return object[array[position]];
// }
// console.log(getValueByKeyPosition(lesson1, 0));

const verifyPair = (object, key, value) => {
  if (object[key] === value) {
    return true;
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));