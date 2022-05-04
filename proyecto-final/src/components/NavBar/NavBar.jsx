// import React from "react";
// import CartWidget from '../CartWidget/CartWidget';
// import "./NavBar.css";


// function NavBar(props) {
//     return (
//         <div className='nav-container'>
//             <CartWidget/>
//             <h1>MOTOCICLETAS</h1>
//             <h3>TIENDA SUPERBIKES</h3>
//             <ul className="nav">
//                 <a href="#">Kawasaki</a>
//                 <a href="#">Honda</a>
//                 <a href="#">Susuki</a>
//                 <a href="#">Yamaha</a>
//             </ul>
//         </div>
//     )
// }

// export default NavBar; 

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src='omg-logo.png'
                    alt="OMG Comics"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/Kawasaki' className={nav => nav.isActive ? 'nav-active' : ''}>Kawasaki</NavLink></li>
                <li><NavLink to='/category/Yamaha' className={nav => nav.isActive ? 'nav-active' : ''}>Yamaha</NavLink></li>
                <li><NavLink to='/category/Susuki' className={nav => nav.isActive ? 'nav-active' : ''}>Susuki</NavLink></li>
                <li><NavLink to='/category/Honda' className={nav => nav.isActive ? 'nav-active' : ''}>Honda</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;