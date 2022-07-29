import React from "react";
import CartWidjet from "./CartWidget";

function NavBar(){

    return (

        <header>

            <h2>SHOPPING ONLINE</h2>

            

           <nav id="navbar">
            
            <CartWidjet></CartWidjet>
            <a className="navLink" href="#">INICIO</a>
            <a className="navLink" href="#">NOSOTROS</a>
            <a className="navLink" href="#">PRODUCTOS</a>
            <a className="navLink" href="#">CONTACTO</a>

            </nav> 

        </header>

    );
}

export default NavBar;