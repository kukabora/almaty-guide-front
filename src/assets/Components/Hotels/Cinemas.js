import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import rixos from "../../img/rixos.jpg"
import rahat from '../../img/rahat.jpeg'
import dostyk from "../../img/dostyk.jpg"
import swiss from "../../img/swiss.jpg"
import kinopark16 from "../../img/kinopark16.png"
import cinematowers from "../../img/cinematowers.png"
import kinopark6 from "../../img/kinopark6.png"
import kinopark8 from "../../img/kinopark8.png"
import "../../Styles/tabsStyle.css"

class Cinemas extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box entert">
                            <div className="box-img">
                               <img src={rixos} alt=""/>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Rixos</h2>
                                    <p>Seifullina 506/99</p>
                                </div>

                            </div>
                            <div className="box-btn">
                                <a href="/hotelpage"><button>Reserv</button></a>
                            </div>
                        </div>


                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/hotelpage"> <img src={rahat} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Rahat Palace Hotel</h2>
                                    <p>Al-Farabi Avenue, 77/8 Esentai Mall</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Reserv</button>
                            </div>
                        </div>

                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/hotelpage"> <img src={dostyk} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>The Dostyk Hotel</h2>
                                    <p>Kurmangazy st., 36</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Reserv</button>
                            </div>
                        </div>


                        <div className="food-box entert">
                            <div className="box-img">
                                <a href="/reddragon"> <img src={swiss} alt=""/></a>
                            </div>
                            <div className="box-text">
                                <div className="texts">
                                    <h2>Swissotel Wellness Resort</h2>
                                    <p>Tausamaly microdistrict, 50a</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button>Reserv</button>
                            </div>
                        </div>


                    </div>
                </Container>
            </div>
        );
    }
}

export default Cinemas;
