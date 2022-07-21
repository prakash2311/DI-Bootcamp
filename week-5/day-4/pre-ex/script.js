
async function fetchWord(){
	let responseFetch = await fetch('http://random-word-api.herokuapp.com/word?number=1');
	//Response object
	console.log(responseFetch)
	if(responseFetch.status !== 200){
		throw new Error ("Not good")
	} else{
		let word = await responseFetch.json()
		return word[0];
	}
}


async function getGif (wordrandom){
	let responseFetchGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	if(responseFetchGif.status !== 200){
		throw new Error ("Not good - get gif")
	} else{
		let gif = await responseFetchGif.json()
		return gif;
	}
}

async function displayGif(){
	try {
		let word = await fetchWord();
		let gif = await getGif(word);
		if (gif["data"].length == 0){
			throw new Error ("GIF NOT FOUND")
		} else {
			let url = gif["data"]["images"]["original"]["url"];
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", url);
			document.body.appendChild(imageGif);
		}
	} catch (error){
		console.log(error.message)
	}
}


displayGif()
