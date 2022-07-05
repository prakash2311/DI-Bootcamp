

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

/* EX - 2
let form1 = document.getElementsByTagName("form")
console.log(form1);
let id1 = document.querySelectorAll("id");
function send(){
  console.log(id1.value);
}
*/

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
