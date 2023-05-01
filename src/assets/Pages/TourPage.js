import React, {Component} from 'react';
import TourGalery from "../Components/TourPage/TourGalery";
import Footer from "../Components/Footer";
import {Container} from "@mui/material";
import "../Styles/TourStyle.css"
import item1 from "../img/bring-item1.png"
import item2 from "../img/bring-item2.png"
import item3 from "../img/bring-item3.png"
import item4 from "../img/bring-item4.png"
import BlcNavbar from "../Components/BlcNavbar";

class TourPage extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <Container>
                    <div className="tourpage-title">
                        <h1>Tour to Kaiyndy Lake</h1>
                    </div>
                    <TourGalery />
                    <div className="tour-desc">
                        <div className="description-tour">
                            <p>Lake Kaindy is located 280 km from Almaty, in the Kungei Alatau gorge, at an altitude of 1667 m. People call this place the “sunken forest” for its surreal appearance: trunks of giant fir trees rise from the turquoise surface of the lake, like the masts of sunken ships. And “Kaindy” in Kazakh means “birch abundance”, because about five kilometers from the lake, among a dense spruce forest, there is a charming birch grove.</p>
                        </div>
                        <div className="cost">
                            <p>Date: 6th December </p>
                                <p>Time: 6.00-23.00</p>
                                <p>Cost: 17.000 tenge</p>
                               <p>Place of collection: st. Baitursynov 100, between Abai and Satpayev streets, opposite the Astana hotel.</p>
                        </div>
                    </div>
                    <div className="tour-program-title">
                        <h1>Tour program Kaindy lake</h1>
                    </div>
                    <div className="tour-program">
                        <div className="tour-program-box first">
                            <div className="tour-program-box-title">
                                <h6>
                                    13.00 Arrival to Lake Kaindy
                                </h6>
                                <p>Trekking is waiting for you 3 km to the lake, the observation deck and to the river where it flows into the lake, you can swim here, the water in the lake is very cold, about 6 degrees, so if you are not afraid of cold water, then take a swimsuit with you</p>
                            </div>
                            <div className="tour-program-box-title">
                                <h6>
                                    15.00 Photosession
                                </h6>
                                <p>Our travel company has its own personal photographer and videographer, we will take good photos and videos in high quality!</p>
                            </div>
                            <div className="tour-program-box-title">
                                <h6>
                                    18.00 Departure and arrival in Almaty
                                </h6>
                                <p>After dinner, you will drive back to the city (220 km, approximately 2.5 hours), upon arrival the driver will drop you anywhere in the city</p>
                            </div>
                        </div>
                        <div className="tour-program-box second">
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="tour-program-box third">
                            <div className="tour-program-box-title">
                                <h6>6.00 Departure from Almaty</h6>
                                <p>Early in the morning, at about 6-7 in the morning, the driver will pick you up from the appointed address and you will go to Kaindy Lake (300 km, about 5 hours), along the way there will be a stop near the market in the village of Baiseit where you can buy snacks and drinks</p>
                            </div>
                            <div className="tour-program-box-title">
                                <h6>
                                    13.15 Lake excurssion
                                </h6>
                                <p>Upon arrival, the tour will begin from the parking lot (approximately 1.5-2 hours)</p>
                            </div>
                            <div className="tour-program-box-title">
                                <h6>
                                    16.00 Departure and arrival in the village of Saty
                                </h6>
                                <p>After Lake Kaindy you will go to the village of Saty (14 km, about 30 minutes), here you will have lunch at the guest house of a Kazakh family</p>
                            </div>
                            <div className="tour-program-box-title">
                                <h6>23.00 You are at home!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="bring">
                        <div className="bring-title">
                            <h1>What to bring</h1>
                        </div>
                        <div className="bring-boxes">
                            <div className="bring-box">
                                <div className="bring-box-img"><img src={item1} alt=""/></div>
                                <div className="bring-box-text">
                                    <h6>Comfortable shoes</h6>
                                    <p>Sneakers or boots will be a good helper in walking in the mountains; ideal if the shoes are waterproof</p>
                                </div>
                            </div>
                            <div className="bring-box">
                                <div className="bring-box-img"><img src={item2} alt=""/></div>
                                <div className="bring-box-text">
                                    <h6>Sun protection</h6>
                                    <p>Sunglasses, a cap hat and cream will help you out in sunny weather</p>
                                </div>
                            </div>
                            <div className="bring-box">
                                <div className="bring-box-img"><img src={item3} alt=""/></div>
                                <div className="bring-box-text">
                                    <h6>Comfortable and warm clothes</h6>
                                    <p>At the same time warm (because it can be very cold in the mountains) and clothing that does not restrict movement, which is easy to walk in</p>
                                </div>
                            </div>
                            <div className="bring-box">
                                <div className="bring-box-img"><img src={item4} alt=""/></div>
                                <div className="bring-box-text">
                                    <h6>Insect protection</h6>
                                    <p>While traveling, ticks and mosquitoes can occasionally be encountered, so insect protection will not be superfluous.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tourpage-btn">
                        <button>Reserve a tour</button>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default TourPage;
