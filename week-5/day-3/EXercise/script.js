
//EX - 1
// const testNum = (num) => {
//     return big10 = new Promise(function (resolve, reject) {
//         if (num <= 10) {
//             resolve("less then 10");
//         }else {
//           reject("greater then 10");
//         }
//     });
// }
//
// testNum(15)
// .then(result => console.log(result))
// .catch(err =>  console.log(err))
//
// testNum(8)
// .then(result => console.log(result))
// .catch(err =>  console.log(err))

//EX - 2
// const sec4 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("success")
//       }, 4000);
//       reject ("Ooops something went wrong")
// })
// .then(result => console.log(result))
// .catch(errr =>  console.log(errr))


// EX - 3
// const alwaystrue = new Promise(function (resolve, reject) {
//     resolve(3)
//     reject("boo")
// })
// .then(result => console.log(result))
// .catch(errr =>  console.log(errr))
