let solar = ["Mercury", "Venus", "Earth", "Mars", "jupitar", "saturn", "Uranus", "Neptune"]
let color = ["yellow","pink","blue","green","grey","orange","brown","red"]
let solarplanet = document.body
let i = 0
solar.forEach(planet => {
  let divs = document.createElement("div")
  divs.classList.add("planet",planet)
  divs.setAttribute("style",`background: ${color[i]};`)
  solarplanet.append(divs)
  i++
});
