import React, { Component } from 'react';
import { Container } from "react-bootstrap";

import traveler from '../img/traveler.png'
import bluecat from '../img/bluecat.png'
import starbucks from '../img/starbucks.png'
import bigapple from '../img/bigapple.png'
import coffeeboom from '../img/coffeeboom.png'
import coffeeoriginal from '../img/coffeeoriginal.png'
import milkandhoney from '../img/milkandhoney.png'
import urbo from '../img/urbo.png'
import avocado from '../img/avocado.png'
import sixcoffee from '../img/sixcoffee.png'
import cakes from '../img/cakesandbubbles.png'
import teadot from '../img/teadot.png'

class CoffeeHouse extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box">
                            <div className="box-img">
                                <img src={traveler} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Traveler’s coffee</h2>
                                <p>Average check: <span className="text-bold"> 1000-2500 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> Asian, Chinese, Pan-Asian</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Gogol, 87</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-btn">
                                <a href="/restaurantPage" style={{ border: "none", background: "none", padding: "0" }}> <button>Reserve table</button> </a>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        );
    }
}

export default CoffeeHouse;
