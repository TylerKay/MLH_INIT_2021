import React from 'react'
import "./AboutMe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
    library.add(faLinkedin);

    return (
        <>    
            <div className="about-me-container">
                <div className="about-me-intro-desc">
                    <p style={{lineHeight: 0, fontWeight: "600"}}>Hello there! My name is Youngjun Cho or Ryan Cho. </p>
                    <p style={{lineHeight: 1, fontWeight: "600"}}>I am a student designer at the School of the Art Institute of Chicago.</p>
                </div>

                <div className="about-me-experience-section">
                    <h3>Experience</h3>
                    <div className="work-experience-container">
                        <div className="work-experience">
                            <h4 className="work-experience-company">WholesomeZine</h4>
                            <h5 className="work-experience-job-title">Design Intern</h5>
                            <p className="work-experience-date">01/2022 - 09/2022 (10 months) </p>
                            <p className="work-experience-resp">Responsibilties: Accounting, Illustrator, Web Designer</p>
                            <p className="work-experience-project">Project: Album Cover, Intern Webpage</p>
                        </div>
                    </div>

                    <div className="work-experience-container">
                        <div className="work-experience">
                            <h4 className="work-experience-company">Samsung</h4>
                            <h5 className="work-experience-job-title">Intern</h5>
                            <p className="work-experience-date">06/2021 - 08/2021 (2~ months) </p>
                            <p className="work-experience-resp">Responsibilties: Translating, Layout design, Researcher</p>
                            <p className="work-experience-project">Project: Presentation Design</p>
                        </div>
                    </div>

                    <div className="work-experience-container">
                        <div className="work-experience">
                            <h4 className="work-experience-company">eWay</h4>
                            <h5 className="work-experience-job-title">Art Assistant</h5>
                            <p className="work-experience-date">11/2018 - 05/2021 (2.5~ years) </p>
                            <p className="work-experience-resp">Responsibilties: Teaching, Lesson Planning, Public Speaking</p>
                            <p className="work-experience-project">Project: Student Portfolios</p>
                        </div>
                    </div>


                    <div className="contact-me">
                        <h3>Contact Me</h3>
                        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#005eff",}} /> */}
                        {/* <FontAwesomeIcon icon="coffee" /> */}
                        <a href="https://www.linkedin.com/in/youngjun-cho-30b792220/">
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "0072b1", height: "75px", padding: "5px"}} />
                        </a>

                        <FontAwesomeIcon icon={faEnvelope} style={{height: "75px", padding: "5px"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
