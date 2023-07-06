// import React from "react";

// class Project extends React.Component {
//     render(){
//         return(
//             <div id="Projects"></div>
//             <section className="index-category">
//              <p>Projects</p>
//              <a href="#" className="index-category-box">
//                <div className="dark-overlay"></div>
//                <h3>Project 1<br></br>Learning</h3>
//              </a>
//                <a href="https://infinite-savannah-06208.herokuapp.com/" className="index-category-box">
//                  <div className="dark-overlay"></div>
//                  <h3>Project 2 <br></br>Growing</h3></a>
//                  <a href="#" class="index-category-box">
//                    <div class="dark-overlay"></div>
//                    <h3>Project 3 <br></br>Perfecting</h3></a>
//                    <a href="#" className="index-category-box">
//                      <div className="dark-overlay"></div>
//                      <h3>Project 4 <br></br>Loving It!</h3></a>
//            </section>
//           );
//     }
//     }
    
//     export default Project;
import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div id="Projects">
        <section className="index-category">
          <p>Projects</p>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Project 1<br />Learning</h3>
          </a>
          <a href="https://infinite-savannah-06208.herokuapp.com/" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Project 2<br />Growing</h3>
          </a>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Project 3<br />Perfecting</h3>
          </a>
          <a href="#" className="index-category-box">
            <div className="dark-overlay"></div>
            <h3>Project 4<br />Loving It!</h3>
          </a>
        </section>
      </div>
    );
  }
}

export default Project;
