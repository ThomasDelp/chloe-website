import React from 'react';

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
          <li><a href="/">Accueil</a></li>
          <li><a href="/psychologie">La Psychologie</a></li>
          <li><a href="/qui-suis-je">Qui Suis-je?</a></li>
          <li><a href="/contact">Me Contacter</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;