
async function famper(name){
  if (name == "string"){
    return `hello ${name}`
  }else {
    throw new Error("rejecte")
  }
}
console.log(famper("tom"));
