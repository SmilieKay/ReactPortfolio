import React from "react";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "My Projects |" + Config.SITE_TITLE;
const DESC = "Cheryl Miller's Projects.";
const CANONICAL = Config.SITE_DOMAIN + "/";
class Projects extends React.Component {
  render() {
    return (
      <main>
           <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL}/>
                <meta name="description" content= {DESC}/>
              </Helmet>
      <div id="Projects">
        <section className="index-category">
          <p>Projects</p>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>
              Project 1<br />
              Learning
            </h3>
          </a>
          <a
            href="https://infinite-savannah-06208.herokuapp.com/"
            className="index-category-box"
          >
            <div className="dark-overlay"></div>
            <h3>
              Project 2<br />
              Growing
            </h3>
          </a>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>
              Project 3<br />
              Perfecting
            </h3>
          </a>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>
              Project 4<br />
              Loving It!
            </h3>
          </a>
        </section>
      </div>
      </main>
    );
  }
}

export default Projects;
