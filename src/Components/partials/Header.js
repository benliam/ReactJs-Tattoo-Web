import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import Logo from '../../images/logos/benz-logo.png';
import LogoWhite from '../../images/logos/benz-logo-white.png';
const LogoAlt = 'Benz.Tattoo Design Logo - Tattoo Studio in Da Nang, Vietnam';

/** Menu list */
const MenuList = [
    {name: 'Home', href: '/'},
    {name: 'About us', href: '/about'},
    {name: 'Contact', href: '/contact'}
  ]; 

// Render Menu
const RenderMenu = () => MenuList.map((value, key) => {
  return <li key={key} className="nav-item active"><a className="nav-link" href={value.href}>{value.name}</a></li>;
});

export class Header extends Component {
 render() {
   return (
       <header className="fixed-top ">
        <div className="navbar"><a className="navbar-brand" href="/"> <img className="default" alt={LogoAlt} src={Logo} /><img className="inverted"  alt={LogoAlt}  src={LogoWhite}/></a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"><span className="toggle-label">Menu</span><span className="toggle-label-close">Close</span><span className="toggle-icon"><span className="line" /><span className="line" /></span></button></div>
        <ul id="nav">
        <RenderMenu />
        </ul>
      </header>
   )
 }
}

export default Header