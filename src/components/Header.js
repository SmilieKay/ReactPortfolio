import React from "react";
import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <header className="header-main">
            {/* <!--use below code if I want to add a logo */}
             {/* <div class="header-main-logo">-->  */}
               
               <nav className="header-main-nav">
                 <ul>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About Me</NavLink></li>
                   <li><NavLink to="/projects">Projects</NavLink></li>
                   <li><NavLink to="/contact">Contact</NavLink></li>
                 </ul>
               </nav>
             
       
             <div className="header-main-sm">
              <a href="https://www.facebook.com/cheryl.rollings.58" target="_blank"><div className="header-main-sm-fb"></div></a>
              <a href="mailto:smilie_kay@yahoo.com"><div className="header-main-sm-email"></div></a>

               <div className="burger-menu-btn"></div>
             </div>
           </header>
        );
    }
}

export default Header;