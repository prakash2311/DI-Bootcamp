//Exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// // * I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2
// function displayStudentInfo(objUser){
//     const{first,last} = objUser
//     console.log(`your full name is ${first} ${last}`);
// }
// displayStudentInfo({first: 'Elie', last:'Schoppik'})

//Exercise 3
//const users = { user1: 18273, user2: 92833, user3: 90315 }
// const userArray = Object.entries(users);
// console.log(userArray);

// const userArray = users.map((Id) => Id);
// console.log(userArray);
//
// userArray.forEach((index) => (index[1] *= 2));
// console.log(userArray);

//Exercise - 4
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const member = new Person('John');
// console.log(typeof member);
// //output - object


// Exercise - 5

//   // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
// answer to 4 is 3

// Exercise - 6

class Animal {
  constructor(name, type, color) {
    this.animalName = name;
    this.animalType = type;
    this.animalColor = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color, secondcolor) {
    super(name, type, color);
    this.white = secondcolor;
  }
  sound(sound) {
    return `${sound} I am a ${this.animalType} named ${this.animalName} and I'm  and ${this.animalColor} and ${this.white} `;
  }
}

let farmerCow = new Mamal("Lily", "Cow", "brown", "white");

console.log(farmerCow.sound("Mouuu"));
