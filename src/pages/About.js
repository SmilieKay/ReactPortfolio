import React from "react";

class About extends React.Component{
render() {
    return(
        <section className ="index-about">
        <div id="About"></div>
        <div className ="wrapper-main index-about-flex"> 
        <div className ="index-about-img">
        <img src="../images/me-brown-hair.jpg" alt="Cheryl Miller"/></div>
        <div className ="index-about-text">
       <h2>A Little Bit About Me</h2>
       <p>I would like to take a moment to introduce myself and let you know more about me. I am a mother of two wonderful boys, raising them to be the men they are has been one of the greatest joys of my life. I am a wife to a supportive and nurturing man that has always encouraged me in everything that I do. I have always loved problem solving and puzzle skills and have had a strong desire to learn. My desire to learn and puzzle/problem solving is what sparked my desire to learn about computer coding and web design. It provides the challenge of puzzle solving and the opportunity to be artistic and create new things. Web Design/Coding fuels my fire for learning and creating. Feel free to contact me to learn more about me.</p>
      
       <a href="mailto:smilie_kay@yahoo.com">E-mail me to learn more!</a></div></div>
      </section>
      );
}
}

export default About;
