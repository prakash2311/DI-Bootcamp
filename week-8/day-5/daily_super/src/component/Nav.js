
import React from 'react';

const Nav = (props) => {
    const {data} = props;
    return(
        <>
<header className="header"> Superheroes Memory Game
<div className="left"><span>Score: {data.score} </span><span> Top Score: {data.toscore} </span></div>
</header>
</>
    )
}
export default Nav