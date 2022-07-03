
/*   EX - 1

let list1 = document.body.children[1]
list1.children[1].textContent = "richard"
list1.children[0].textContent = "Dev"
list1.nextElementSibling.children[0].textContent = "Dev"
list1.nextElementSibling.removeChild(list1.nextElementSibling.children[1])
*/

/* EX - 2

let divs = document.body.children[0]
divs.setAttribute("style","background-color : lightblue; padding:10px;");
divs.nextElementSibling.removeChild(divs.nextElementSibling.children[0])
divs.nextElementSibling.setAttribute("style","border: solid 4px;")
document.body.setAttribute("style", "font-size: 25px;")
*/

let nav = document.getElementById('navBar')
nav.setAttribute("id",'socialNetworkNavigation')
let newli = document.createElement("li")
let newContent = document.createTextNode('Logout')
newli.appendChild(newContent)
nav.firstElementChild.appendChild(newli)
