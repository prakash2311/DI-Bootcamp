
function playTheGame(){
let enter = "would you like play the game? \n press ok to continue or Cancel to go out."
    if(confirm(enter) == false){
      alert("No problem, Goodbye")
    }
      return enterNumber()
}
function enterNumber(){
  let userNumber = prompt("enter a number between 0 and 10")
   if (isNaN(userNumber)){
     alert("Sorry Not a Number, Goodbye")
   }else if (userNumber < 0 || userNumber > 10) {
     alert("sorry its not a good number, Goodbye")
     return
   }else{
     var computerNumber = Math.floor((Math.random() * 11) + 0);
   }
   console.log(userNumber , computerNumber);
   let tries = 1
   while (compareNumber(userNumber, computerNumber)){
     userNumber = Number(prompt("try again"))
     tries++
     if (tries == 3){
       return alert("too many attempt")
     }
   }

}

function compareNumber(userNumber , computerNumber){
  if (userNumber === computerNumber){
    alert("winner");
     return false
  }else if(userNumber > computerNumber){
       alert("big number");
       return true
  }else if (userNumber < computerNumber) {
       alert("small number");
       return true
  }

}
playTheGame()
compareNumber()
