import React from "react";

import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from "../styles/projects.module.css";
import quizImage from '../images/Quiz.png';
import tailgateImage from '../images/Tailgate.png';
import parksImage from '../images/parks.png';
import passImage from '../images/Password.png';
import plannerImage from '../images/Schedular.png';
import weatherImage from '../images/Weather.png';

const TITLE = "My Projects |" + Config.SITE_TITLE;
const DESC = "Cheryl Miller's Projects.";
const CANONICAL = Config.SITE_DOMAIN + "/";
// class Projects extends React.Component {
//   render() {
//     return (
//       <main>
//            <Helmet>
//                 <title>{TITLE}</title>
//                 <link rel="canonical" href={CANONICAL}/>
//                 <meta name="description" content= {DESC}/>
//               </Helmet>
//       <div id="Projects">
//         <section className={styles["index-category"]}>
//           <p className={styles["index-category-title"]}> My Projects</p>
//           <div className={styles["index-category-box"]}>
//   <a href="https://smiliekay.github.io/Tron-Themed-JavaScript-Quiz/" className={styles["index-category-link"]}>
//     <div className={styles["dark-overlay"]}>
//       <p className={styles["index-category-description"]}>This is a JavaScript quiz that I designed and built. It is timed and uses local storage to keep your scores. Try your hand at it and see if you can win the special BONUS high score! </p>
//     </div>
//     <img src={quizImage}  alt="Quiz " className={styles["index-category-image"]}/>
//   </a>
// </div>

     

//           <div className={styles["index-category-box"]}>
//           <a href="https://smiliekay.github.io/03-Challenge/" className={styles["index-category-link"]} >
//             <div className={styles["dark-overlay"]}>
            
//             <p className={styles["index-category-description"]}>This password generator allows you to answer a series of questions an will generate a secure password from your answers </p></div>
//             <img src={passImage}  alt="Password generator " className={styles["index-category-image"]} />
//           </a>
//           </div>
//           <a href="https://smiliekay.github.io/Blown-Away-weather/" className={styles["index-category-box"]}>
//             <div className={styles["dark-overlay"]}></div>
//             <img src={weatherImage}  alt="Weather app "/>
//             <p>You can put in your city and get the 5 day forecast. It was my frist time using a api and a wonderful learning experience!</p>
//           </a>
          
//           <a href="https://smiliekay.github.io/Daily-Planner/" className={styles["index-category-box"]}>
//             <div className={styles["dark-overlay"]}></div>
//             <img src={plannerImage}  alt="planner app "/>
//             <p>I designed this planner for someone working 12 hour shifts and used 24 hour time but also for those that work night shift as well so I allowed for 24 hour scheduling.  </p>
//           </a>
        
//           <a href="https://github.com/SmilieKay/BattleHawksTailgate" className={styles["index-category-box"]}>
//             <div className={styles["dark-overlay"]}></div>
//             <img src={tailgateImage}  alt="Tailgate planner"/>
//             <p>This was a group project that I was a part of, fans of the St. Louis BattleHawks can use to help plan their tailgate parties for future games.</p>
//           </a>
//           <a href="https://github.com/SmilieKay/ParkQuest" className={styles["index-category-box"]}>
//             <div className={styles["dark-overlay"]}></div>
//             <img src={parksImage}  alt="Park Quest"/>
//             <p>This was another group project that allows users to look for National parks in a selected state and to see the weather in the parks area.  </p>
//           </a>
//         </section>
//       </div>
//       </main>
//     );
//   }
// }

// export default Projects;

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
          <p className={styles["index-category-title"]}> Click on the picture to see my project in action </p>
          
          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Tron-Themed-JavaScript-Quiz/" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This is a JavaScript quiz that I designed and built. It is timed and uses local storage to keep your scores. Try your hand at it and see if you can win the special BONUS high score!</p>
              </div>
              <img src={quizImage}  alt="Quiz "/>
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/03-Challenge/" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This password generator allows you to answer a series of questions and will generate a secure password from your answers.</p>
              </div>
              <img src={passImage}  alt="Password generator "/>
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Blown-Away-weather/" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>You can put in your city and get the 5-day forecast. It was my first time using an API and a wonderful learning experience!</p>
              </div>
              <img src={weatherImage}  alt="Weather app "/>
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Daily-Planner/" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>I designed this planner for someone working 12-hour shifts and used 24-hour time but also for those that work night shift as well so I allowed for 24-hour scheduling.</p>
              </div>
              <img src={plannerImage}  alt="planner app "/>
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://github.com/SmilieKay/BattleHawksTailgate" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This was a group project that I was a part of, fans of the St. Louis BattleHawks can use to help plan their tailgate parties for future games.</p>
              </div>
              <img src={tailgateImage}  alt="Tailgate planner"/>
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://github.com/SmilieKay/ParkQuest" className={styles["index-category-link"]}>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This was another group project that allows users to look for National parks in a selected state and to see the weather in the parks area.</p>
              </div>
              <img src={parksImage}  alt="Park Quest"/>
            </a>
          </div>

        </section>
      </div>
      </main>
    );
  }
}

export default Projects;
