import React from "react";
import {NavLink } from 'react-router-dom';

import Tab from './Tab'
import yoshiplogo from "../../assets/images/yoship-logo.png";
import "./Header.css"


const Header = () => {

  return  <header className="header_header">
    <NavLink exact to="/" activeClassName="selected" className="header_link"><img src={yoshiplogo} alt="yoship logo" className="header_logo"/>YoShip</NavLink>
    <NavLink to="/tracking" activeClassName="selected" className="header_link"><Tab icon="map-marker-alt" tab="Tracking"/></NavLink>
    <NavLink to="/login" activeClassName="selected" className="header_link"><Tab icon="user-tie" tab="Login"/></NavLink>
    <NavLink to="/register" activeClassName="selected" className="header_link"><Tab icon="user-plus" tab="Register"/></NavLink>
  </header>

}


export default Header