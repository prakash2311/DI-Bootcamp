
// Convert the below promise into async await:
// EX - 1
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
//
// const conv = async function(){
//   const response = await fetch("https://www.swapi.tech/api/starships/9/")
//   const data = await response.json()
//   console.log(data)
// }
// conv()


// Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling'); // 1 calling
    let result = await resolveAfter2Seconds();
    console.log(result); // after 2 seconds resolve
}

asyncCall(); // function calling
