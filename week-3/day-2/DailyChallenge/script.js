// We need to retrieve the form
// We need to use the event submit - to submit the form
// submit the form
// to avoid the page from refrshing : event.preventDefault()
// access the input - by a form because lot of inputs
// to retrieve the input values - value property
// push the value to the array

// target: the element linked to the events

let formSentence = document.forms.libform;
formSentence.addEventListener("submit", retrieveInputValues);

let allValues = [];

function retrieveInputValues (ev) {
	ev.preventDefault();
	// console.log(ev.target); //the form
	let allInputs = ev.target.getElementsByTagName("input");
	for (let input of allInputs){
		// trim method
		let valueData = input.value;
		console.log("valueData", valueData.length)
		if (valueData === '' || valueData.length === 0){
			console.log("one value is empty")
			allValues = [];
			return;
		} else {
			allValues.push(valueData);
			input.value = ''; //make the values disapear
		}
	}
	displayValues();
}


function displayValues () {
	console.log("in the displayValues function")
	let sentence = `The ${allValues[1]} ${allValues[0]} ${allValues[3]} in ${allValues[4]} with ${allValues[2]}`;
	let text = document.createTextNode(sentence);
	let span = document.getElementById("story");
	span.appendChild(text)
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
