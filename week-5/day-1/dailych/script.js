
let form = document.forms[0];
form.addEventListener("submit", displayAsJson);

function displayAsJson(ev) {
  ev.preventDefault();
  let input = new FormData(ev.target);
  let inobject = Object.fromEntries(input.entries());
  let inputJson = JSON.stringify(inobject);
  let p = document.createElement("p");
  let text = document.createTextNode(inputJson);
  p.appendChild(text);
  document.body.appendChild(p);
 }
