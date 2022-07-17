
class Video {
  constructor(title, uploader, seconds){
    this.title = title,
    this.uploader = uploader,
    this.seconds = seconds
  }

  watch(duration){
    duration <= this.seconds ? console.log(`You watched ${duration} seconds of ${this.title}!`) : console.log (`The video is shorter than that, please put in another duration!`)
  }
}

let myVid = new Video("My first video!", "cNolan", 57);
myVid.watch(66);
let myVid2 = new Video("Tenet", "cNolan", 2332243532433);

let videoCollection = [];
[
  ["LET'S PLAY MINECRAFT EPISODE 13214 SUPER COOL HOUSE BUILT!!!!", "genericYoutuber1", 423235],
  ["20 more supposed lifehacks with catchy music", "genericYoutuber2", 22435],
  ["geneticYoutuber3 reacts to 20 more supposed lifehacks with catchy music", "genericYoutuber1", 11313423235]
].forEach(val => videoCollection.push(new Video(...val)))
console.log(videoCollection)


// Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ
