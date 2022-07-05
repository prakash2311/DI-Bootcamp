

let noun = document.querySelector("#noun");
let adj1 = document.querySelector("#adjective");
let person = document.querySelector("#person");
let verb = document.querySelector("#verb");
let place = document.querySelector("#place");

let libbutton = document.querySelector("#lib-button");

libbutton.addEventListener("click", writeStory)

function writeStory() {
  let launchedStory = " "
  launchedStory += "<p>This weekend I am going camping with " +person+ " and I packed my lantern, sleeping bag, and " +noun+ "I am so  " +adj1+ " to " +verb+ " in a tent.The place in north called  " +place+ " </p>"

  story.innerHTML = launchedStory;
}



/*
function goMadLib(){
  let formData = document.getElementById("libform")

  let noun = document.getElementById("noun").value;
  let adj1 = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let verb = document.getElementById("verb").value;
  let place = document.getElementById("place").value;

let newContent = "This weekend I am going camping with "s
newContent+= ""+person+ " and I packed my lantern, sleeping bag, and "
newContent+= ""+noun+ "I am so  " +adj1+ " to "
newContent+= ""+verb+ " in a tent.The place in north called  " +place;

document.getElementById("story").innerHTML = newContent ;
}

let libbutton = document.getElementById("lib-button");
libbutton.addEventListener("click", goMadLib);

*/
