
//---------- ex-1 --------
let fruits = ["banana", "apples", "oranges", "blueberries"];

//------ 1 -------

fruits.shift();
fruits.sort();
fruits.push("kiwi");
fruits.splice(0,1);
fruits.reverse();
console.log(fruits);

//------------ ex-2 ------------

let moreFruits =["banana", ["apples", ["oranges"], "blueberries"]];
let fruit = moreFruits[1][1];
console.log(fruit);
