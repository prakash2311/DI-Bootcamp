const robots = [
       {
         id: 1,
         name: 'Leanne Graham',
         username: 'Bret',
         email: 'Sincere@april.biz',
         image: 'https://robohash.org/1?200x200'
       },
       {
         id: 2,
         name: 'Ervin Howell',
         username: 'Antonette',
         email: 'Shanna@melissa.tv',
         image: 'https://robohash.org/2?200x200'
       },
       {
         id: 3,
         name: 'Clementine Bauch',
         username: 'Samantha',
         email: 'Nathan@yesenia.net',
         image: 'https://robohash.org/3?200x200'
       },
       {
         id: 4,
         name: 'Patricia Lebsack',
         username: 'Karianne',
         email: 'Julianne.OConner@kory.org',
         image: 'https://robohash.org/4?200x200'
       },
       {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         image: 'https://robohash.org/5?200x200'
       },
       {
         id: 6,
         name: 'Mrs. Dennis Schulist',
         username: 'Leopoldo_Corkery',
         email: 'Karley_Dach@jasper.info',
         image: 'https://robohash.org/6?200x200'
       },
       {
         id: 7,
         name: 'Kurtis Weissnat',
         username: 'Elwyn.Skiles',
         email: 'Telly.Hoeger@billy.biz',
         image: 'https://robohash.org/7?200x200'
       },
       {
         id: 8,
         name: 'Nicholas Runolfsdottir V',
         username: 'Maxime_Nienow',
         email: 'Sherwood@rosamond.me',
         image: 'https://robohash.org/8?200x200'
       },
       {
         id: 9,
         name: 'Glenna Reichert',
         username: 'Delphine',
         email: 'Chaim_McDermott@dana.io',
         image:'https://robohash.org/9?200x200'
       },
       {
         id: 10,
         name: 'Clementina DuBuque',
         username: 'Moriah.Stanton',
         email: 'Rey.Padberg@karina.biz',
         image:'https://robohash.org/10?200x200'
       }
       ];

       async function getUsers(){
         let url = "https://jsonplaceholder.typicode.com/users";
         try{
           let res = await fetch(url)
           return await res.json();
         }catch (error){
           console.log(error);
         }
       }

       async function renderUsers() {
         let users = await getUsers();
         let html = " ";
         users.forEach(user => {
           let htmlSegment =`<div class="box">
                             <img src="https://robohash.org/${user.id}?200x200"/>
                             <h3>${user.name}</h3>
                             <h4>${user.username}</h4>
                             <h6>${user.email}</h6>
                             </div>`;
              html += htmlSegment;
         });
         let container = document.querySelector('.container');
         container.innerHTML = html;
       }
       renderUsers()

//createRobots(robots)
let filterrobo = document.getElementById("search")
filterrobo.addEventListener("keyup", (event) => {
  let input = event.target.value
  let allrobo = document.getElementById("container").querySelectorAll("div")
  robots.map(user => {
    if (!user.name.toUpperCase().includes(input.toUpperCase())) {
      allrobo[user.id - 1].style.display = "none"
    }
    else allrobo[user.id - 1].style.display = "block"
  })
})
