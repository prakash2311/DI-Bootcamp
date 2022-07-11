
((nameofuser) => {
  let navbar = document.getElementsByClassName("navbar")[0];
  console.log(navbar);
  let div = document.createElement("div");
  let divs = document.createElement("div");
  divs.classList.add("container-fluid");
  let atag = document.createElement("a");
  atag.classList.add("navbar-brand");
  atag.setAttribute;
  let atext = document.createTextNode(`Welcome ${nameofuser}!`);
  let image = document.createElement("img");
  image.classList.add("d-inline-block");
  image.classList.add("align-text-top");
  image.src = "images.png";
  image.style.width = "30px";
  image.style.height = "30px";
  atag.appendChild(image);
  atag.appendChild(atext);
  div.appendChild(atag);
  navbar.appendChild(div);
})("Prakash");
