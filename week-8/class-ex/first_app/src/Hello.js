import React from 'react';


const Hello = () => {

    // EX -1 without jsx
    // return <h1>I do not use JSX</h1>

    // EX-2
    //  const myElement = <h1>I Love Jsx</h1>
    //  return(myElement);
    
    // EX-2.3
    // const sum = 5+5;
    // const my = <div>"React is {sum} time better with JSX"</div>
    // return(my)

    // EX-3
    const user = {
        first_name: 'Bob',
        last_name: 'Dylan',
        fav_animals : ['Horse','Turtle','Elephant','Monkey']
      };
      const name = <h3>{user.first_name} {user.last_name}</h3>
      return(name)

}   

export default Hello;

