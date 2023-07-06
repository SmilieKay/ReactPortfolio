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
                   <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                   <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
                   <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                   <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                 </ul>
               </nav>
             
       
             <div className="header-main-sm">
              <a href="https://www.facebook.com/cheryl.rollings.58" target="_blank"><div className="header-main-sm-fb"></div></a>
            <NavLink to="/contact"></NavLink><div className="header-main-sm-email"></div>

               <div className="burger-menu-btn"></div>
             </div>
           </header>
        );
    }
}

export default Header;