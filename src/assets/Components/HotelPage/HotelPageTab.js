import React, {Component} from 'react';
import {Container} from "@mui/material";
import item_img from "../../img/rixos.jpg";
import AfishaTab from "../HotelPage/AfishaTab";
import "../../Styles/EntertainmentPageStyle.css"

class HotelPageTab extends Component {
    render() {
        return (
            <div>
            <Container>
                <div className="food-tabs foodpage">
                    <div>
                        <ul id="foood">
                            <li className="food-active"><a href="/food">Hotels</a></li>
                        </ul>
                    </div>
                    <div className="foodpage-items">
                        <div className="foodpage-item">
                            <div className="foodpage-item-img">
                                <img src={item_img} alt=""/>
                            </div>
                            <div className="foodpage-item-description entertainmentpage-item">
                                <div className="foodpage-item-title entertainmentpage-item-title">
                                    <h1>Rixos Alma-Ata</h1>
                                </div>
                                <div className="foodpage-item-text">
                                    <div className="foodpage-address">
                                        <p>Seyfullina 506/99</p>
                                        <p>Rixos Almaty, located in the center of the most significant and most developed city of Kazakhstan</p>
                                        <p> 8 (727) 300 33 00</p>
                                        <p>from 60000 kzt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foodpage-menu">
                            <AfishaTab />
                        </div>
                    </div>
                </div>
            </Container>
            </div>
        );
    }
}

export default HotelPageTab;
