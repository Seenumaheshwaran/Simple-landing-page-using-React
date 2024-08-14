import React from "react";
import './header.css';
// import logo from './logo.svg';
function Header(){
    return(<div class="container">
    <img src=""></img>
    <nav id="nav">
        <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="shop.html">Aboutus</a></li>
            <li><a href="trending.html">Products</a></li>
            <li><a href="about.html">Services</a></li>
            <li><a href="contact.html">Contactus</a></li>
        </ul>
    </nav>
</div>);
}
// function Header() {
//     return (
//     <h2> This is a Header</h2>
//     );
// }

export default Header;
