const students = [
  { name: "Rahul", score: 75 },
  { name: "Anu", score: 45 },
  { name: "Arjun", score: 82 },
  { name: "Meera", score: 58 }
];

const passedStudents = students.filter(student => student.score > 60);

console.log(passedStudents);