import React from "react";
import Logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">
            <img src={Logo} alt="" height="60px" />
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
