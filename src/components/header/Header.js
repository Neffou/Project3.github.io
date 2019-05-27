import React, { Component } from "react";
import {NavLink } from 'react-router-dom';

import Brand from './Brand'
import Tab from './Tab'


import "./Header.css"


class Header extends Component{

  state = {
    background : true
  }

  whiteBackground = () => {
    this.setState({background : false}) 
  }

  pictureBackground = () => {
    this.setState({background : true})
  }
  
  render () {

    return  (
    <header className={this.state.background? "header_header" : "header_header_white"}>

      <NavLink exact to="/" activeClassName="selected" className={this.state.background? "header_link" : "header_link_black"} onClick={this.pictureBackground}>
        <Brand/>
      </NavLink>

      <NavLink to="/tracking" activeClassName="selected" className={this.state.background? "header_link" : "header_link_black"} onClick={this.whiteBackground}>
        <Tab icon="map-marker-alt" tab="Tracking"/>
      </NavLink>

      <NavLink to="/login" activeClassName="selected" className={this.state.background? "header_link" : "header_link_black"} onClick={this.whiteBackground}>
        <Tab icon="user-tie" tab="Login"/>
      </NavLink>

      <NavLink to="/register" activeClassName="selected" className={this.state.background? "header_link" : "header_link_black"} onClick={this.whiteBackground}>
        <Tab icon="user-plus" tab="Register"/>
      </NavLink>

    </header>
    )
  }
}


export default Header