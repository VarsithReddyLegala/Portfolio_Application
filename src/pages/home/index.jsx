import React from "react";
import './style.scss';
import { Link } from "react-router-dom";
const Home=()=>{
    return (<section className="home" id="home">
        <div className="home__text-wrapper">
            <h1>
                Hello, I'm Varsith Reddy Legala
                <br/>
               Interested in Full Stack Development
            </h1>
        </div>
        <div className="home__text-wrapper2">
            <a
                className="home__text-wrapper2__CV"
                href="https://drive.google.com/file/d/1pRQ30qacjBwHueD3KVM1WGRG7ZZ4ylEA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Download CV
            </a>
        </div>
        <div className="home__opportunity">
                <p className="home__opportunity__para">
                    🌟 <b>Open to Job Opportunities</b> 🌟 <br />
                    If you have any relevant job offers, please feel free to contact me at{" "}
                    <a href="mailto:Legala.varshith@gmail.com" className="home__opportunity__email">
                       Legala.varshith@gmail.com
                    </a>.
                </p>
        </div>

    </section>)
}
export default  Home;