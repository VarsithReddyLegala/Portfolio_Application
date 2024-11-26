import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../Components/pageheader";
import { Animate } from "react-simple-animate";
import './style.scss'
const About=()=>{
    const job_summary=`With a solid foundation and deep interest in full-stack development,I have built a diverse 
    range of applications using frontend libraries like React.js and Angular, as well as backend technologies like 
    Node.js. My experience also includes game development using WebGL and Three.js. Most recently, I led the 
    development of AspireCare, a healthcare application for expecting mothers, using FlutterFlow. 
    This app aids in tracking health, providing information on preeclampsia risks, and facilitating early detection.`
    const job_summary1=`I am proficient in both the MERN and MEAN stacks, with expertise in Angular, React, TypeScript, and more, 
    enabling me to create seamless, high-performance web and mobile applications. Alongside my technical skills, 
    I bring strong problem-solving abilities, ranking in the top 9,000 globally on HackerRank. I have also actively
    participated in hackathons, where I consistently apply my skills to real-world challenges.I am passionate 
    about leveraging my skills to deliver innovative, user-focused solutions that drive impact and enhance
    user experience.`
    return (<section id="About" className="about">
        <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40}/>}/>
        <div className="about__content">
        <div className="about__content__imagewrapper">
                <div className="about__content__imagewrapper__profilepic">
                 <img src="./profilepic.jpeg" alt="" />
                 </div>
            </div>
            <div className="about__content__personalWrapper">
                       <div className="about__content__personalWrapper__name">
                            <h2>VARSITH REDDY LEGALA</h2>
                       </div>
                       <div class="about__content__personalWrapper__contact-info">
                            <div className="about__content__personalWrapper__contact-info__items">
                                    <div class="about__content__personalWrapper__contact-info__items__contact-item">
                                        <span class="about__content__personalWrapper__contact-info__items__contact-item__icon">&#9993;</span>
                                        <span>Legala.varshith@gmail.com</span>
                                    </div>
                                    <div class="about__content__personalWrapper__contact-info__items__contact-item">
                                        <span class="about__content__personalWrapper__contact-info__items__contact-item__icon">&#x1F4CD;</span>
                                        <span>St. Louis, Missouri, U.S.A</span>
                                    </div>
                                    <div class="about__content__personalWrapper__contact-info__items__contact-item">
                                        <span class="about__content__personalWrapper__contact-info__items__contact-item__icon">&#x1F5C3;</span>
                                        <a style={{textDecoration:"None"}} href="https://github.com/Varshith2007hub" target="_blank">github-VarsithReddyLegala</a>
                                    </div>
                                    <div class="about__content__personalWrapper__contact-info__items__contact-item">
                                        <span class="about__content__personalWrapper__contact-info__items__contact-item__icon">&#x1F465;</span>
                                        <a style={{textDecoration:"None"}}href="https://www.linkedin.com/in/varsithreddylegala/" target="_blank">linkedin-VarsithReddyLegala</a>
                                    </div>
                            </div>
                        </div>
                        <div className="about__content__personalWrapper__jobdesc">
                                <p>{job_summary}</p>
                                <p>{job_summary1}</p>
                       </div>
            </div>
        </div> 


    </section>)
}
export default  About;