

/* EX - 1

let divs = document.getElementsByTagName("h1")
console.log(divs);

let p = document.querySelectorAll("p")
p[p.length-1].remove()


function myFunction(){
document.getElementById('demo').style.backgroundColor ="red"
}

function display(){
  document.getElementById('demo1').style.display = "none"
}

function fontSize(){
  document.getElementById('demo3').style.fontWeight = "bold"
}
*/


// Retrieve the form and console.log it.
let frm = document.querySelector('form');
// console.log(frm);
// Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById('fname')
// console.log(firstName);

let lastName = document.getElementById('lname')
// console.log(lastName);

let btn = document.getElementById('submit')
// console.log(btn);

let firstInputs = document.querySelector('[name~=fname]');
let lastInputs = document.querySelector('[name~=lname]');
// console.log(firstInputs);
// console.log(lastInputs);


// let ulId = document.getElementsByClassName('usersAnswer')[0];
//     console.log(ulId);

let myForm = document.forms[0];

myForm.addEventListener("submit", userInputs);

function userInputs(ev){
    ev.preventDefault();
    if(firstInputs.value.length > 0 || lastInputs.value.length > 0){
    let firstValue = myForm.elements.fname.value;
    let firstText = document.createTextNode(firstValue);
    let lastValue = myForm.elements.lname.value;
    let lastText = document.createTextNode(lastValue)
    let ulId = document.getElementsByClassName('usersAnswer')[0];

    let firstNameLi = document.createElement('li');
    firstNameLi.appendChild(firstText);

    let lastli = document.createElement('li');
    lastli.appendChild(lastText);

    ulId.appendChild(firstNameLi);
    ulId.appendChild(lastli);
    }
    firstInputs.value = "";
    lastInputs.value = "";
}


/* EX - 3

var allBoldItems;

function getBold_items(){
  allBoldItems = document.querySelectorAll("strong")
  console.log(allBoldItems);
}

function highlight(){
  for(let i = 0; i < allBoldItems.length; i++){
  allBoldItems[i].setAttribute("style","color:blue;")
}
}

function return_normal(){
  for(let i = 0; i < allBoldItems.length; i++){
    allBoldItems[i].setAttribute("style","color:black;")
  }
}

getBold_items()
  for(let i = 0; i < allBoldItems.length; i++){
    allBoldItems[i].addEventListener("mouseover", highlight);
      allBoldItems[i].addEventListener("mouseout", return_normal);
}
*/

/* EX - 4
let form = document.forms[0]
            form.addEventListener("submit", calc)
            function calc() {
            event.preventDefault()
            let rad = document.getElementsByName("radius")[0].value;
            let h2 = document.createElement("h2")
            h2.innerHTML = (4 / 3) * Math.PI * Math.pow(rad, 3);
            form.appendChild(h1)
            console.log(rad)
            }
*/


/*  EX - 5
let p = document.getElementsByTagName("p")[0]

p.addEventListener("mouseout", p1);
function p1(){
  this.style.backgroundColor = "lightblue"
}

p.addEventListener("click",p2);
function p2(){
  this.style.color= "red"
}

p.addEventListener("mouseover", p3);
function p3(){
  this.setAttribute("style","text-align: center;")
}
*/
