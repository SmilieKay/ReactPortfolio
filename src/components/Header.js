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
                   <li><NavLink to="/" caseSensitive activeclassname="active">Home</NavLink></li>
                   <li><NavLink to="/about" activeclassname="active">About Me</NavLink></li>
                   <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
                   <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                 </ul>
               </nav>
             
       
             <div className="header-main-sm">
              <a href="https://www.facebook.com/cheryl.rollings.58" target="_blank"><div className="header-main-sm-fb"></div></a>
            <Link to="/contact"></Link><div className="header-main-sm-email"></div>

               <div className="burger-menu-btn"></div>
             </div>
           </header>
        );
    }
}

export default Header;


