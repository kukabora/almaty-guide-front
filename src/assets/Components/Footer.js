import React, {Component} from 'react';
import map from '../img/map.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="left-footer">
                    <img src={map} alt=""/>
                </div>
                <div className="right-footer">
                    <div className="footer-navigation">
                        <nav id="footer-nav">
                            <div>
                                <ul>
                                    <li><a href="/food"> Food </a></li>
                                    <li><a href="/food">Fast food</a></li>
                                    <li><a href="/food">Restaurants</a></li>
                                    <li><a href="/food">Canteens</a></li>
                                    <li><a href="/food">Coffee houses</a></li>
                                    <li><a href="/food">Steakhouses</a></li>
                                    <li><a href="/food">Bars/pubs</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/Hotels.js">Entertainment</a></li>
                                    <li><a href="/food">Cinemas</a></li>
                                    <li><a href="/food">Theatres</a></li>
                                    <li><a href="/food">Live events</a></li>
                                    <li><a href="/food">Fashion industry</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/food">Events</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/food">Tours</a></li>
                                    <li><a href="/food">Big Almaty Lake</a></li>
                                    <li><a href="/food">Kolsay Lakes</a></li>
                                    <li><a href="/food">Lake Kaiyndy</a></li>
                                    <li><a href="/food">Charyn Canyon</a></li>
                                    <li><a href="/food">Issyk Lake</a></li>
                                    <li><a href="/food">Butakovskiy waterfall</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/food">Movement</a></li>
                                    <li><a href="/food">Car rent</a></li>
                                    <li><a href="/food">By bus</a></li>
                                    <li><a href="/food">By taxi</a></li>
                                    <li><a href="/food">By cableway</a></li>
                                    <li><a href="/food">Bike rental</a></li>
                                    <li><a href="/food">Electric scooter rental</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="">Contacts</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
