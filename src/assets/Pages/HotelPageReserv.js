import React, {Component} from 'react';
import item_img from "../img/cinema-item.png";
import {Container} from "@mui/material";
import Reservation from "../Components/HotelPage/Reservation";
import BlcNavbar from "../Components/BlcNavbar";

class HotelPageReserv extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <Container>
                    <div className="food-tabs foodpage">
                        <div>
                            <ul id="foood">
                                <li className="food-active"><a href="/food">Cinemas</a></li>
                                <li><a href="/food">Theatrical performances</a></li>
                                <li><a href="/food">Concerts</a></li>
                                <li><a href="/food">Stand-ups</a></li>
                                <li><a href="/food">Exhibitions</a></li>
                            </ul>
                        </div>
                        <div className="foodpage-items">
                            <div className="foodpage-item">
                                <div className="foodpage-item-img">
                                    <img src={item_img} alt=""/>
                                </div>
                                <div className="foodpage-item-description entertainmentpage-item">
                                    <div className="foodpage-item-title entertainmentpage-item-title">
                                        <h1>Chaplin Mega Alma-Ata</h1>
                                    </div>
                                    <div className="foodpage-item-text">
                                        <div className="foodpage-address">
                                            <p>Almaty, st. Rozybakiev, 247A, SEC "MEGA Alma-Ata"</p>
                                            <p>After 22:00, minors can only be in the cinema with their parents/guardians if they have documents for the child. Please read the 4DX Lounge Rules.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reserv">
                                <Reservation />
                            </div>
                            <div className="res-btn">
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default HotelPageReserv;
