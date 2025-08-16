const student = {
  name: "Ali",
  age: 20,
  course: "Computer Science",
  scores: {
    math: 85,
    english: 78,
    science: 92
  }
};

let {name,course,scores:{math}}=student

console.log(`${name} is studying ${course} and scored ${math} in math`)
