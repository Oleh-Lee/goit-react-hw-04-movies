import React from 'react'
import{NavLink} from 'react-router-dom'


const Nav = () => (
    <ul className="navList">
      <li className="navItem"><NavLink className="link" activeClassName="activeLink" exact to="/">Home</NavLink></li>
      <li className="navItem"><NavLink className="link" activeClassName="activeLink" to="/movies">Movies</NavLink></li>
    </ul>
);

export default Nav;