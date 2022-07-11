/*

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//prediction : 3
// run in the console: 3
q1()


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//prediction : 0,5
// run in the console: 0, 5
q22()
q2()
q22()

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// prediction : hello
// run in the console: hello
q3()
q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//prediction : test
// run in the console: test
q4()

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//prediction : 5 , 5
// run in the console: 5 , 5

*/


/*
// Ex - 2

function winBattle(){
    return true;
}

const experiencePoints = winBattle => winBattle == 10 ? "true" : "false"
experiencePoints(10)
*/


/*
// EX - 3

const isString = (input) => (typeof input === "string" ? true : false);

//console.log(isString([1, 2, 3]));
*/

// EX - 4
/*
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element,i) => {
    console.log(`#${i+1} choice is ${element}`)
  });

//----
  colors.forEach((element , index) => element === "Violet" ? console.log("Yeah") : console.log("no...."));
*/


// EX - 5

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th","st","nd","rd"]
color.forEach((element,i) => {
    let dis = (i == 0 ? ordinal[i+1]: i == 1 ? ordinal[i+1]: i == 2 ? ordinal[i+1]: ordinal[0])
    console.log(`${i+1}${dis} ${element}`)
});
