let products = [
        {
            id: 0,
            name: "Deluxe Bicycle",
            url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
            price: 499.98
        },
        {
            id: 1,
            name: "Super Deluxe bagpack",
            url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
            price: 134.99
        },
        {
            id: 2,
            name: "Super Duper Scooter",
            url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
            price: 1090.95
        },
        {
            id: 3,
            name: "Smartphone",
            url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
            price: 399.99
        }
    ];

// (function (){
//   let htmlSegment;
//   let container = document.getElementById('container');
//   products.forEach(e => {
//   htmlSegment =`<div class ="box">
//                       <h3>${e.name}</h3>
//                       <img src="https://image.shutterstock.com/${e.id}?200x200"/>
//                       <h3>${e.price}</h3>
//                       <div>`
//                       container.innerHTML = htmlSegment;
//
//     });
// })();

(function(){
  products.forEach(e => {
  let div = document.createElement('div')
  let text = document.createTextNode(`${e.name}`)
  div.appendChild(text)
  });
});
