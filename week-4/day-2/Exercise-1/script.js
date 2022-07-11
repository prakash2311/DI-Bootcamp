
/*
// EX - 1

const sum = (a,b) => a+b
console.log(sum(4 , 7));
*/

/*
// EX - 2
// 1
function  decl(kg){
	return kg * 1000;
}
console.log(decl(2));
// 2
const expr = function (kg) {
	return kg * 1000;
}
console.log(expr(2));
// 3
const arro = kg => kg*1000
console.log(arro(2));
*/

/*
// EX - 3
(function (job_title ,geographic_location ,partners_name, number_of_children){
  let div = document.getElementById("container");
  let input = document.createTextNode(`you will be a ${ job_title} in ${geographic_location} and married to ${ partners_name } with ${ number_of_children } kids.`)
  div.appendChild(input)
})
("developer","israel","juli",2);
*/


/*
// EX - 5
//immune booster lemon, orange, and ginger.
// 1
function makeJuice(immuneBooste){

  function addIngredient(first, second, third){
  let div = document.getElementById("cont")
  let input = document.createTextNode(`the clint want a ${immuneBooste} juice, containing ${first}, ${second}, ${third}`)
   div.appendChild(input)

}addIngredient("lemon","orange", "ginger")
}makeJuice("medium")


// 2
function makeJuice(immuneBooste){
  const ingredients = []

   function addIngredients(first, second, third){
     let all = `${first}, ${second}, ${third}`;
     ingredients.push(all)
   }

   function displayJuice(){
     ingredients.forEach((clint) => {
         let div = document.createElement("div");
         let text = document.createTextNode(`the clint want a ${immuneBooste} juice, containing ${clint} `);
         div.appendChild(text);
         document.body.appendChild(div);
   })
 }
 addIngredients("lemon","orange", "ginger")
 addIngredients("lemon","orange", "ginger")
 displayJuice()
}
makeJuice("medium")

*/
