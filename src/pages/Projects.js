import React from "react";

import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from "../styles/projects.module.css";

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
        <section className={styles["index-category"]}>
          <p className={styles["index-category-title"]}>Projects</p>
          <a href="#" className={styles["index-category-box"]}>
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 1<br />
              Learning
            </h3>
          </a>
          <a
            href="https://infinite-savannah-06208.herokuapp.com/"
            className={styles["index-category-box"]}
          >
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 2<br />
              Growing
            </h3>
          </a>
          <a href="#" className={styles["index-category-box"]}>
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 3<br />
              Perfecting
            </h3>
          </a>
          <a href="#" className={styles["index-category-box"]}>
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 4<br />
              Loving It!
            </h3>
          </a>
          <a href="#" className={styles["index-category-box"]}>
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 5<br />
              Loving It!
            </h3>
          </a>
          <a href="#" className={styles["index-category-box"]}>
            <div className={styles["dark-overlay"]}></div>
            <h3>
              Project 6<br />
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
