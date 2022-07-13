//---------------------
// Destructuring
// -----------------------

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
// }

// let name = product.name;
// let price = product.price;

// let name = product["name"];
// let price = product["price"];


// instead we use object destructuring
// -- destructuring

// name of the variable need to be equal to the name
// of the keys inside the object
let {name, price} = product;
console.log("name is : ", name, "price is :", price)
                        // Tshirt           //10



console.log(product); //the object is unchanged

// // --- rename the variables created while destructuring
// // let {keyName : variableName} = obj
// create clearer variable name
let {name : productName, price : productPrice} = product;
console.log("productName is : ", productName,
  "productPrice is :", productPrice)

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
//   size : "M",
// }

// // -- default value with destructuring

// let {name : productName, price : productPrice, size="L"} = product;

// console.log("productName is : ", productName,
//   "productPrice is :", productPrice, "size is :", size)


// // // ---------------
// // // WITH FUNCTIONS
// // // -----------------

function displayUser(userObj){
  let fn = userObj["firstName"];
  let color = userObj["favoriteColor"];
  console.log(`The person name is ${fn}, his fav is ${color}`)

}

displayUser({firstName: "Alex", favoriteColor: "purple"})

// destructuring in the parameters of a function
function displayUser({firstName:username, favoriteColor: color}){
  console.log(`The person name is ${username}, his fav is ${color}`)
}

displayUser({firstName: "Alex", favoriteColor: "purple"})

// destructuring in the function
function displayUser(userObj){
  let {firstName, favoriteColor} = userObj
  console.log(`The person name is ${firstName}, his fav is ${favoriteColor}`)
}

displayUser({firstName: "Alex", favoriteColor: "purple"})



let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(numPlanets); //8
console.log(discoveryYears); //
{yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}


// ## Exercise2
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : name, house, friendName and age)


function getMoreDetails(objCharacter) {
  const {name, house,friend:{friendName,age}} = objCharacter
  console.log(name, house, friendName, age)
}

function getMoreDetailsOther({name, house,friend:{friendName,age}}) {
  console.log(name, house, friendName, age)
}

getMoreDetails(
      {name: 'Hermione Granger',
        house: 'Gryfindor',
        friend :  {
          friendName : 'Harry Potter',
          age : 20
        }
      })


getMoreDetailsOther(
      {name: 'Hermione Granger',
        house: 'Gryfindor',
        friend :  {
          friendName : 'Harry Potter',
          age : 20
        }
      })


// ## Exercise3
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails(objElon){
  const {
    first:firstname,
    last:lastname,
    housesLocation:[locationOne, locationTwo],
    houses : {value : valueHouses}
  } = objElon

  console.log(firstname, lastname)
  console.log(locationOne, locationTwo, valueHouses)

}
