import React, {Component} from 'react';
import bao from '../../img/bao.png'
import kaindy from '../../img/kaiyndy.png'
import charyn from '../../img/charyn.png'
import kolsay from '../../img/kolsay.png'
import issyk from '../../img/issyk.png'
import plato from '../../img/plato.png'
import singingdunes from '../../img/singingdunes.png'
import bestobe from '../../img/bestobe.png'
import {Container} from "@mui/material";
import Footer from "../Footer";
import map from '../../img/map.png'

class TourComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="tours-title">
                        <h3>Tours for November</h3>
                    </div>
                <div className="tours-boxes">
                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={kaindy} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <a href="/tourpage"> <button>More</button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={charyn} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={plato} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={bao} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={issyk} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={kolsay} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={singingdunes} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tours-box">
                        <div className="tours-img">
                            <img src={bestobe} alt=""/>
                        </div>
                        <div className="tours-text">
                            <h1>Big Almaty Lake</h1>
                            <div className="tours-price">
                                <div className="price">
                                    <p>Cost: 6000 tenge | Date: 13/11/2021</p>
                                    <p> Time: 8.00 am - 11.00 pm</p>
                                </div>
                                <div className="tours-btn box-btn">
                                   <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default TourComponent;
