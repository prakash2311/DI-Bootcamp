
function promises(pro){
  return pro = new Promise((resolve,reject) => {
    let str = "string";
    setTimeout(() => {
    if(str == "johan"){
    let str1 = str3;
    resolve(str1)
  }else{
    reject("string ")
  }
},5000)
  })
}
promises()
