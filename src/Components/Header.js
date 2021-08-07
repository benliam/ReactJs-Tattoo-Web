import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Logo from '@/images/logos/logo-white.svg';

export class Header extends Component {
 render() {
   return (
       <header className="fixed-top ">
        <div className="navbar"><a className="navbar-brand" href="index.html"> <img className="default" alt="Neoto - Creative Studio Portfolio Template" src="/public/images/logos/logo-white.svg" /><img className="inverted" alt="Neoto - Creative Studio Portfolio Template" src="/public/images/logos/logo-white.svg"/></a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"><span className="toggle-label">Menu</span><span className="toggle-label-close">Close</span><span className="toggle-icon"><span className="line" /><span className="line" /></span></button></div>
        <ul id="nav">
          <li className="nav-item active"><a className="nav-link" href="/">Trang chủ</a></li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">pages</a>
            <div className="dropdown-menu"><a className="dropdown-item" href="about.html">About us</a><a className="dropdown-item" href="services.html">Our Designs</a></div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">portfolio</a>
            <div className="dropdown-menu"><a className="dropdown-item" href="projects-grid.html">Tattoo ideas</a><a className="dropdown-item" href="project-single-alt.html">Project single - Alt</a></div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">blog</a>
            <div className="dropdown-menu"><a className="dropdown-item" href="blog-slider.html">Blog - Slider</a><a className="dropdown-item" href="blog-single.html">Blog single</a></div>
          </li>
          <li className="nav-item"><a className="nav-link" href="/contact">Liên hệ</a></li>
        </ul>
      </header>
   )
 }
}

export default Header