import React from "react";
class Home extends React.Component{
    render() {
        return(
            <main>
            <div className="main-intro">
              <h1>Cheryl<br></br>Miller's<br></br>Portfolio</h1>
              <p>A FIRE for learning and Creating!</p>
             {/* <!-- Todo use below code when i make a logo-->   */}
                {/* <!-- <a href="#">My Work</a> --> */}
            </div>
            <div className="main-quotes">
             <p>"“One of the strongest characteristics of genius is the power of lighting its own fire.” <br></br> John Foster</p> 
             <p> “I am always doing that <br></br> which I cannot do, in order <br></br> that I may learn how to do it.”<br></br><br></br>Pablo Picasso 
            </p>
            </div>
          </main>
        );
    }
}

export default Home;