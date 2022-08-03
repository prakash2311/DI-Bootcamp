const fs = require("fs");
fs.readFile('/Users/prakashdevta/Desktop/DI-Bootcamp/week-7/day-3/daily/rightleft.txt', 'utf8',(err, data) =>{
    console.log(data);
    
    let count = 0
    let i = 0;
    let side = 1;


        if (err) {
        console.log(err);
    }
    else {
        while (i < data.toString().length) {
            if ((data.toString().charAt(i))== '>'){
                count++
            }
            else count--
            i++
        }
        i = 0
        console.log(count);
        
        while (i < data.toString().length) {
            if (data.toString().charAt(i) == '>') {
                side++
            }
            else side--
            if (side < 0) {
                console.log(i + 'left side man');
                break;
            }
            i++
        }
        console.log(count+" steps")
    }
})