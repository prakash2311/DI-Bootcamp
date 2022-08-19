import React from 'react';
import { Link, NavLink} from 'react-router-dom'

const Navbar = (props) =>{
    <nav className='nav-wrapper red darken-3'>
        <div className='container'>
            <Link className='brand-logo' to='/'>My Blog</Link>
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>contact</NavLink></li>
            </ul>
        </div>
    </nav>
}

export default Navbar;