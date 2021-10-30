import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const  activeStyle={
        fontWeight: "bold",
        color: "red"
      }

      const  activeStyle2={
        fontWeight: "bold",
        color: "blue",
        
       
      }


    return (
        <div className="header-css">
            <nav>
      <NavLink activeStyle={activeStyle} to="/home">Home </NavLink>

      <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "Green",
  }} to="/friends">Friends</NavLink>

      <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "blue"
  }} to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;