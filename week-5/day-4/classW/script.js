
const func = () => {
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
        .then((resp) => resp.json()) //return a promise
        .then((resp) =>
              console.log(`The hour of the sunrise in Tel Aviv is:
              ${resp.results.sunrise}`))
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Done ...")
}
func()


// Difference Between Promises And Async/Await - Demonstration Using Examples
// Example With Promises

// let goodGrades = 93;
//
// let endSemester = new Promise((resolve, reject) => {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades => 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// })
// //
// // const checkRequest = () => {
// //     console.log('test 2')
// //     endSemester
// //         .then(value =>
// //             console.log("I got an amazing gift : A ", value));
// // }
// //
// // console.log('test 1')
// // checkRequest()
// // console.log('test 3')
//
// // Same Example With Async/Await
// const checkRequest = async () => {
//     console.log('test 2')
//     console.log("I got an amazing gift : A ", await endSemester)
// }
//
// console.log('test 1')
// checkRequest()
// console.log('test 3')
