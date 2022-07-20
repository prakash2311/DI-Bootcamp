const makeallcaps = (arr) => {
    return caps = new Promise(function (resolve, reject) {
        resolve(sortwords(arr.map(e => e.toUpperCase())))
        reject("Ooops something went wrong")
    })
}
const sortwords = (arr) => {
    return arr.sort()
}
makeallcaps([1, "pear", "banana"])
      .then((arr) => sortwords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeallcaps(["apple", "pear", "banana"])
      .then((arr) => sortwords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeallcaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortwords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
