import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
   return (
      <div className="nav-bar">
         <NavLink to="/" exact={true} className="navbar-item">
            Song Overview
         </NavLink>
         <NavLink to="/About" className="navbar-item">
            About Winc Lil' Playlist
         </NavLink>
      </div>
   );
}
export default NavBar;