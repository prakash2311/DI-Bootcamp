const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

/*
let array = [];
gameInfo.forEach((element) =>{
  array.push(element.username+="!")
})
console.log(array);

let bigscore = [];
gameInfo.forEach((element)=>{
  element.score > 5 ? bigscore.push(element.username):" ";
})
console.log(bigscore);

let totalscore = 0;
  gameInfo.forEach((element) =>{
     totalscore += element.score
  })
  console.log(totalscore);
*/

let array = [];
let bigscore = [];
let totalscore = 0;
gameInfo.forEach((element) =>{
    array.push(element.username+="!")
    element.score > 5 ? bigscore.push(element.username):" ";
     totalscore += element.score
});
console.log(array);
console.log(bigscore);
console.log(totalscore);
