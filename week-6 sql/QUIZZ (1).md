# Review on Javascript

#### Basics

1. How to access the second element of the array `let arr = [3, 7, 10]`

let second = arr[arr.length - 2];
console.log(second);

2. For the code below, what does `arrNums.splice(2, 0)` return?

    ```javascript
       let arrNums = [1, 2, 3, 4, 5];
    ```
            <!-- let arrNums = [1, 2, 3, 4, 5]
             arrNums.splice(2, 0)
             console.log(arrNums)

            ans:-  array [1, 2, 3, 4, 5]
          -->

3. What is the result of the following code :

    ```javascript
    // const oneTwoThree = [1, 2, 3]
    // const sevenEightNine = [7, 8, 9]
    //
    // const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    // console.log(all)
    ```
<!-- ans:-  Array [4, 5, 6, 1, 2, 3, 7, 8, 9] -->

4. What does the following code print to the console?

   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
ans:- "callaway"

5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

    ```javascript
    const x = function(a, b){
       return a*b;
    }
ans: - function also be defined using expression, function expression has been stored in a variable, the variable can be used as a function:
       const x = function (a, b) {
         return a * b
       }
         let c = x(4, 3);
        console.log(c)

6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

    ```javascript
    function x() {
      Declaring global variable using window object
    	a = 5;
    }
    ```  

#### Functions

7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```
  ans:- "Hello, JavaScript!"


8. Transform this function into an arrow function

      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }

      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
<!-- ans :- sum = (num1, num2) =>{
      return num1 + num2
     }

     sum(40,2)
    sum(42,0)
    console.log("the answer to everything is", sum(42,0))
   -->

9. What does the following code print to the console? Explain the process and concept behind it

     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     ```
ans : - we created function foo and nested function bar and return string to bar to foo

#### DOM

10. Which of the following events will you add in the `addEventListener()`method?
      ☐ click
      ☐ onclick

<!-- ans:- 1.click -->

11. Does the `addEventListener()` method allow you to add many events to the same element?

    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
ans:- Yes

12. DOM exercise

      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions

    // ans:-  <!DOCTYPE html>
    //        <html>
    //       <body>
    //
    //
    //       <button onclick="add()">Click me</button>
    //
    //       <p id="HTML_DOM"></p>
    //
    //       <script>
    //       add = () => {
    //       document.getElementById("HTML_DOM").innerHTML = "added paragraph";
    //       }
    //       </script>
    //
    //       </body>
    //       </html>

  *  2. Part II : Add to each new paragraph a event listener of mouse over. When you   hoover  on a paragraph, it should become red





#### Array Methods

14. What is the value of `passed` in the following code?

     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];

     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
  // ans: -  

15. What does the following code log?

   ```javascript
   let nums = [10, 50, 88];

   let bignums = nums.filter(function(n) {
      return n > 10;
   });

   console.log(bignums);
   ```
  // ans:- Array[50, 88] filter the array which array number is greater than 10

16. Use a javascript array method to square the value of every element in the array.

   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
ans:- input.forEach(function(element, index, array){
      array[index] = element* element;
 });
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```

16. Use 2 javascript array methods and chain them to return the sum of all the positives ones.

     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];

     const positiveNum = secondInput.filter((elm) => elm > 0);

    const total = positiveNum.reduce((pos, sec) => pos + sec, 0);

     console.log(total) //42
     ```

17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

     ```javascript
     const input = 'George Raymond Richard Martin';

     data = input.split(" "),
        initials ="";

        for (var i = 0; i < data.length; i++) {
            initials += data[i].substring(0, 1);
        }

     console.log(initials)//'GRRM'
     ```

#### Object and Classes

18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example

Before calling Pass by value Function -> a = 1 b = 2
Inside Pass by value function -> a = 2 b = 1
After calling Pass by value Function -> a =1 b = 2

19. What will be printed in the console

    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    }

    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
  ans:-  "Chocolate Cake is for $ 10"

20. Refactor this code using Classes

      class Item{
      constructor (name, price) {
      this.name = name;
      this.price = price;
      this.displayInfo = function() {
      console.log(this.name + " is for $ " + this.price)
        }
       }
      }

       const cake = new Item("Chocolate Cake", 10);
      cake.displayInfo();


#### Promises

21. What will be the output and why ? What will be the state of the promise ?

    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
ans: - "SUCCESS!"

22. What log will be made by the following code, after 2 seconds?

    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });

    p.then().then(function(data) {
       console.log(data);
    });
    ```
ans:- ok

23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

    ```javascript
    async function f(){
      let result = 'first!';

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });

      result = await promise;

      console.log(result);
    }

    f();
    ```

* 24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch
