// EX - 1
//
// //------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
//
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
//
// //------2------
// const country = "USA";
// console.log([...country]);
//
// //------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// EX - 2
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//
// users.map((value) => console.log(" hello "+value.firstName))
// const fullStack = users.filter(element => element.role == "Full Stack Resident")
// fullStack.forEach((element) => console.log(element.firstName))

// EX - 3
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let star = epic.reduce((arr, combine) =>{
//   return arr + " " + combine ;
// });
// console.log(star);

// EX - 4
// let students = [{name: "Ray", course: "Computer Science", isPassed: true},
//                {name: "Liam", course: "Computer Science", isPassed: false},
//                {name: "Jenner", course: "Information Technology", isPassed: true},
//                {name: "Marco", course: "Robotics", isPassed: true},
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//                {name: "Jamie", course: "Big Data", isPassed: false}];
//
// let passed = students.filter((element) => element.isPassed == true)
// passed.forEach((element) => {
//   console.log(`Good job ${element.name}, you passed the course in ${element.course}`)
//
// });
