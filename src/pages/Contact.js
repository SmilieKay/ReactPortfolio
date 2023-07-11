import React from "react";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Contact Me |" + Config.SITE_TITLE;
const DESC = "Contact Cheryl Miller.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Contact extends React.Component{
    render() {
        return(
            <main>
                <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL}/>
                <meta name="description" content= {DESC}/>
              </Helmet>
           <dev><p>test</p></dev>
           </main>
          );
    }
    }
    
    export default Contact;