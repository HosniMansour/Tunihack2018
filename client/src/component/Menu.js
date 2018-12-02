import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <header className="header-fixed" id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <a href="/"><img src="img/logo.png" height="30" alt="" title="" /></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li>
                            <NavLink activeClassName="menu-active" exact to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="menu-active" exact to="/service">Services</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="menu-active" exact to="/dashboard">Data</NavLink>
                        </li>
                        <li>
                            <a href="http://localhost:3000/map">Map</a>
                        </li>
                        <li>
                            <NavLink activeClassName="menu-active" exact to="/api">API</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="menu-active" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            </header>
        );
    }
}

export default Menu;
