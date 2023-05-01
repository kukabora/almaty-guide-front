import React, {Component} from 'react';
import {Container} from "@mui/material";
import button_arrow from "../img/btn_arrow.png"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import bgf from "../img/1.jpg"
import bgs from "../img/2.jpg"
import bgt from "../img/3.jpg"
import bgfo from "../img/4.jpg"
import bgfi from "../img/5.jpg"
import Navbar from "../Components/Navbar"




class Home extends Component {
    render() {
        const SectionStyle = {
            height: '100vh',
            width: '100%',
        }
        return (
            <div>

            <Fullpage>
                <FullpageNavigation  style ={{right: '5%', top: '0%'}} />
                <div style={{ position: "fixed", zIndex: 99999, top: "0%", left: "2.5%"}}>
                    <Navbar />
                    <Container>
                        <div className="home-text">
                            <h2>
                                <span>Almaty</span> is the major <span>cultural centre</span> of Kazakhstan and its most populous and cosmopolitan city.
                            </h2>
                        </div>
                        <div className="home-btn">
                            <div className="middle">
                                <a href="" className="btn btn4">Go to food <div className="arrow"></div></a>
                            </div>
                        </div>
                        <div className="facts">
                            <div className="facts-blur">
                                <div className="facts-boxes">
                                    <div className="fact-box">
                                        <p>Almaty is a sunny city. The weather pleases residents with sunny days, there are 238 of them a year, cloudy days - 86, and cloudy days - 42. The sunniest months of the year are July and September.</p>
                                    </div>
                                    <div className="fact-box">
                                        <p>90% of the services provided by the akimat can be obtained online today. Every second It-specialist of Kazakhstan lives in Almaty and almost 95% of citizens use online services.</p>
                                    </div>
                                    <div className="fact-box">
                                        <p>The highest mountain skating rink in the world is located in Almaty and this is Medeo. The skating rink is located at an altitude of 1691 meters above sea level. The area of the artificial ice field is 10,500 square meters.</p>
                                    </div>
                                    <div className="fact-box">
                                        <p>The highest mountain TV tower is located in Almaty on Mount Kok-Tobe. If you count from sea level, then this is the tallest television tower in the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <FullPageSections>

                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgf})`, backgroundSize: 'cover'}}>
                        <div className="home-section">
                        </div>
                        </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgs})`, backgroundSize: 'cover'}}>
                        <div className="home-section">

                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgt})`, backgroundSize: 'cover'}}>
                        <div className="home-section">

                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgfo})`, backgroundSize: 'cover'}}>
                        <div className="home-section">

                        </div>
                    </FullpageSection>
                    <FullpageSection style = {{...SectionStyle, backgroundImage: `url(${bgfi})`, backgroundSize: 'cover'}}>
                        <div className="home-section">

                        </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
            </div>
        );
    }
}

export default Home;
