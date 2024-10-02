import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss"

function Navbar() {

    let c
    let  currentScrollTop = 0

    document.addEventListener("scroll", () => {
        const navbar = document.getElementById('navbar');
        var a = window.scrollY;
        var b = navbar.offsetHeight;

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
          navbar.classList.add("scrollUp");

        
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.classList.remove("scrollUp");
        }

        if (a !== 0){
          navbar.classList.add("isNotTop");
        }else{
          navbar.classList.remove("isNotTop");
        }

        c = currentScrollTop;
    });

  return (
    <nav id="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/psychologie">La Psychologie</Link></li>
          <li><Link to="/qui-suis-je">Qui Suis-je?</Link></li>
          <li><Link to="/contact">Me Contacter</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;