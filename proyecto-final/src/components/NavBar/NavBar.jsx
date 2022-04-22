import React from "react";
import "./NavBar.css";


function NavBar(props) {
    return (
        <div>
            <h1>MOTOCICLETAS</h1>
            <h3>TIENDA SUPERBIKES</h3>
            <ul className="nav">
                <a href="#">Kawasaki</a>
                <a href="#">Honda</a>
                <a href="#">Susuki</a>
                <a href="#">Yamaha</a>
            </ul>   
        </div>
    )
}

export default NavBar; 