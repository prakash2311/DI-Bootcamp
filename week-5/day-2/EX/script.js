

let xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.giphy.com/v1/gifs/search?limit=10&q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
  console.log(xhr.response)
};
