import React from "react";
import {NavLink, Link } from "react-router-dom";

class Footer extends React.Component {
    render(){
        return(<footer className="footer-main">
        <div className="wrapper-main footer-main-flex">
          <a className="footer-getintouch" ><NavLink to="/contact">Contact Me</NavLink></a>
          <div className="footer-sitemap">
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About Me</NavLink></li>
                   <li><NavLink to="/projects">Projects</NavLink></li>
                   <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <ul>
              <li><a href="#">Project 1</a></li>
            <li><a href="https://infinite-savannah-06208.herokuapp.com/">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
            <li><a href="#">Project 4</a></li>
              </ul>
          <ul>
            <li><p>If you have any questions about my work or me please do not hesitate to send me a e-mail to arrange a short meeting. </p></li>
           
          </ul>
          <ul>
            <div id="Contact"></div>
            <li><p> Get In Touch:</p></li>
            <li><p>(555)555-5555</p></li>
            <li><p>email@example.com</p></li>
            <li><p>Cheryl Miller 123 Example St.Example City, IL 12345</p></li>
          </ul>
        </div>
      </div>
      </footer>);
    }
}

export default Footer;
