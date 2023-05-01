import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import muz from '../img/muz.png'
import shake from '../img/shake.png'
import friends from '../img/friends.png'
import il from '../img/ilponte.png'
import fahrenheit from '../img/fahren.png'
import redroom from '../img/redroom.png'
import lugo from '../img/lugo.png'
import scandalist from '../img/scandalist.png'
import professor from '../img/professor.png'
import gagarin from '../img/gagarin.png'
import friendly from '../img/friendly.png'
import calliano from '../img/calliano.png'

class Bars extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box">
                            <div className="box-img">
                                <img src={muz} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>MUZ Cultura</h2>
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


                        <div className="food-box">
                            <div className="box-img">
                                <img src={shake} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Shake Shack</h2>
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
                        <div className="food-box">
                            <div className="box-img">
                                <img src={friends} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>The Friends Terrace & Bar</h2>
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
                        <div className="food-box">
                            <div className="box-img">
                                <img src={il} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>IL Ponte</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={fahrenheit} alt="" />
                            </div>
                            <div className="box-text">
                                <h2> Fahrenheit</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={redroom} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Red Room Bar</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={lugo} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Lugo</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={scandalist} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Scandalist </h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={professor} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Professor Bar</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={gagarin} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Gagarin 287</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={friendly} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Friendly</h2>
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

                        <div className="food-box">
                            <div className="box-img">
                                <img src={calliano} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Calliano</h2>
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

export default Bars;
