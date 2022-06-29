
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

}else if (bill > 50 || bill <= 200){
  console.log("your charged 15% tip included " +between);

}if (bill => 200) {
   console.log("your charged 10% tip included " +more);
}
}
calculateTip()


Ex-3

function isDivisible(){
  for (i = 0; i < 500; i++){
  if(i % 23 === 0)
  console.log(i)
}
}
isDivisible()
