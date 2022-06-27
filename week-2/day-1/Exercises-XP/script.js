
//Exe-1

let food = 'chocolate';
let meal = 'dinner';
let sentenceTemplate = `I eat ${food} at every ${meal}`;
console.log(sentenceTemplate);


//Ex--2-1
let myWatchedSeries =["black mirror", "money heist", "the big bang theory"];
//let myWatchedSeriesLength = myWatchedSeries.length;
//console.log(myWatchedSeriesLength);


//Ex--1-2
console.log(`i watched 3 series ${myWatchedSeries[0]}, ${myWatchedSeries[1]} ${myWatchedSeries[2]}`);

//part-2-1
myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries);

 //part2-2

myWatchedSeries.push("game of throne");
console.log(myWatchedSeries);

//Ex--3
let temperatureC = 5 ;
let temperatureF =((temperatureC/5)*9+32);
console.log(temperatureF);

//EX -- 4

let c;
let a=34;
let b =21;
//console.log(a+b);
a = 2;

console.log(a+b);
