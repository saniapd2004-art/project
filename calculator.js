const students = [
  { name: "Rahul", score: 92 },
  { name: "Anu", score: 76 },
  { name: "Meera", score: 45 }
];

students.forEach(student => {
  let grade = "";

  if (student.score >= 75) {
    grade = "A";
  } else if (student.score >= 50) {
    grade = "B";
  } else {
    grade = "F";
  }

  console.log(student.name + " : " + grade);
});