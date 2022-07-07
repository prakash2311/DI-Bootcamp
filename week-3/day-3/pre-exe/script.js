


//setTimeout(makeAppear, 2000);

//function makeAppear(){
//  banner.classList.remove("dis")
//}

let count = document.getElementById("countdown")
let counter = 10;
let idInterval = setInterval(dec, 1000);


function dec(){
    counter --;
    count.textContent= counter;

  }


/*
let countdown = document.getElementById("countdown");
 // Step 2. What function will change it each time?
 let countItDown = function() {
   countdown.textContent = parseFloat(countdown.textContent) - 1;
 };
 // Step 3: Call that on an interval
 window.setInterval(countItDown, 1000);

 */
 </script>
