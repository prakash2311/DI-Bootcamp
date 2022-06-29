
EX - 1
function infoAboutMe(){
  let name = "Dev";
  let age = 20;
  let hobbies = "football";
  console.log("my name " +name+ " my age " +age+ " my hobbies " +hobbies);
}
infoAboutMe()


Ex -1.2

function infoAboutPerson(name, age, color){
  console.log("your name is "+name+" i am " +age+ " years old my favorite color " +color);
}
infoAboutPerson("david", 45, "blue")
infoAboutPerson("josh", 12, "yellow")

Ex - 2

function calculateTip(){
  let bill = prompt("enter your amount")
  let less = bill * 1.2
  let between = bill * 1.15
  let more = bill * 1.1

  if (bill <= 50){
    console.log("your charged 20%tip included " +less );

}else if (bill > 50 || bill < 200){
  console.log("your charged 15% tip included " +between);

}else (bill > 200){
   console.log("your charged 10% tip included " +more);
}
}


calculateTip().toFixed(2)


function calculateTip(){
  let bill = prompt("enter your amount")
while (isNaN(bill)) {
         bill = prompt("enter your amount")
}
  if (bill <= 50){
    return bill * 1.2
}
else if  (bill > 50 && bill <= 200 ){
     return bill * 1.15

}else {
      return bill * 1.1
}
}
calculateTip().toFixed(2)




Ex-3

function isDivisible(){
  let sum = 0;
  for (i = 0; i < 500; i++){
  if(i % 23 === 0){
  console.log(i)
  }
    sum+=i;
 }
 return sum ;
}
isDivisible()


Ex - 4

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList =["banana", "orange", "apple"]

function myBill(){
  let sum = 0;
  for(let i = 0; i < shoppingList.length; i++){
       if(stock[shoppingList[i]] == 0){
         console.log("out of product " +shoppingList[i]);
         continue;
       }
       sum+=prices[shoppingList[i]];
       stock[shoppingList[i]];
    }
    return sum;
}
myBill()


Ex - 6

function hotelCost(){
let nights = prompt("number of nights would like to stay in hotel");
   while(isNaN(nights)){
     nights = prompt("number of nights would like to stay in hotel");
   }
   return nights * 140
}
    hotelCost()

function planeRideCost(){
  let destination = prompt("enter your destination").toLowerCase()
    while(!isNaN(destination)){
      destination = prompt("enter your destination").toLowerCase()
  }
    if(destination === "london"){
         return 183;
    }else if (destination === "paris") {
      return 220;
    }else{
      return 300;
    }

}
planeRideCost()

function rentalCarCost(){
  let day = prompt("number of day")
  while (isNaN(day)) {
     day = prompt("number of day")
  }
  if(day < 10){
  return day*40
}else{
  return (day*40)/1.05
}
}
rentalCarCost().toFixed(2)
