let arrayColors = ["#C0392B", "#CB4335", "#76448A", "#7D3C98", "#2471A3", "#2E86C1", "#17A589",
                   "#2ECC71", "#F1C40F", "#F39C12", "#D35400", "#979A9A", "#717D7E",];
// you can use an array rgba colors or hex colors

//creating a color palletSection

function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors()

function addGrid () {
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i< 2440 ; i++){
		let divColor = document.createElement("div");
    divColor.addEventListener("mousedown", bgc)
		gridPaintSection.appendChild(divColor)

	}

}

addGrid()


let colorPicked;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
//	console.log(colorPicked)
}

function bgc(evt){
  if(colorPicked != null){
    evt.target.style.backgroundColor = colorPicked;
    //console.log(bgc);
    return
  }
}
