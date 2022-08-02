const exp = require('express');

const app = exp();

app.use('/', exp.static(__dirname+'/public'));

app.get('/form', (req,res)=>{
    res.sendFile('/Users/prakashdevta/Desktop/DI-Bootcamp/week-7/day-2/dailyCH/public/index.html');
})

app.get('/aboutMe/:hobby', (req,res)=>{
    res.send('one hobby is coding')
    if(!product){
        return res.status(404)({msg:'ID Not Found'})
      }
})

app.get('/pic/', (req,res)=>{
    res.sendFile('/Users/prakashdevta/Desktop/DI-Bootcamp/week-7/day-2/dailyCH/home-right.png'); 
})

app.listen(3000)
console.log("listning");