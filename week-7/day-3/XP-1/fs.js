const fs = require('fs');

const fileName ='/Users/prakashdevta/Desktop/DI-Bootcamp/week-7/day-3/XP-1/data.txt';
fs.readFile(fileName, 'utf8', (err , data) => {
  if (err){
      console.log(err);
      return
  }
  console.log(data)

  const content = 'bla bla!';
  fs.writeFile(fileName, content, err2 => {
      if (err2) {
          console.log(err2);
          return
      }
      console.log('more bla bla bla')
      
      fs.unlink('data.txt', (err3) => {
          if (err3){
              console.log(err3);
          }
          console.log("file is deleted");
      })
  })
})