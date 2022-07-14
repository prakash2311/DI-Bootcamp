//1. Create a class named Video. The class should be constructed with the following parameters:
//   title (a string)
//   uploader (a string, the person who uploaded it)
//   time (a number, the duration of the video - in seconds)
//2. Create a method called watch() which displays a string as follows:
//  “uploader parameter watched all time parameter of title parameter!”
//3. Instantiate a new Video instance and call the watch() method.
//4. Instantiate a second Video instance with different values.
//5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//6. Think of the best data structure to save this information within the array.
//   Bonus: Loop through the array to instantiate those instances.

class video {
  constructor(title, uploader, time){
    this.title = title
    this.uploader = uploader
    this.time = time
  }
  watch(){
     console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
  }
}
const person = new video("tv","jhon",23)
person.watch();

const person1 = new video("tina","jim",4)
const person3 = new video("rina","josh",7)
let arr = []
arr.push(person, person1, person3)
arr.forEach(e => e.watch())
