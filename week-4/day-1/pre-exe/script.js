
/*
let text = "Hello";// created global veriable

// creating function
function checkText (){
  //in the function "global veriable"
	console.log("In the function",text);
	text += " World";
  // still in the function " using addition to add text in global veriable"
	console.log("Still in the function",text);
}

//befor the function "global veriable"
console.log("before the function", text);

checkText()


console.log("after the function", text);






let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend);
	friend += " Smith";
	console.log("Still in the function",friend);
}

console.log("before the function", friend);

checkfriend()

console.log("after the function", friend);

*/

/*

function user(name){
  console.log('hello $[name]');
}
user("sara")

const welcome second = function(username){
  alert('hello $[username]')
}
welcomesecond("john");


const welcomeThird = (username) => alert('hello $[username])
welcomeThird("john")

*/
function userAge (age) {
	if (temp > 20) {
		return "you can drive";
	} else {
		return "you cannot drive";
	}
}


  let userAge = age > 18 ? "you can drive" : "you cannot drive";
   return userAge;
}
console.log(userAge(20));



const user1 = age1 => age1 > 18 ? "you can drive" : "you cannot drive";
console.log(user1(20));
