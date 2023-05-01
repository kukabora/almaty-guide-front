import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import dijon from "../img/restaurantPage.png";
import afanasich from '../img/afanasich.png'
import jambull from '../img/jambull.png'
import zags from '../img/zags.png'
import linebrew from '../img/linebrew.png'
import len from '../img/len.png'
import noodles from '../img/noodles.png'
import lui from '../img/lui.png'
import raw from '../img/raw.png'
import oblaka from '../img/oblaka.png'
import plv from '../img/plv.png'
import svet from '../img/svet.png'
class Restaurants extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">
                        <div className="food-box">
                            <div className="box-img">
                                <img src={dijon} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Dijon</h2>
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
                                <img src={linebrew} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Line Brew Reserve</h2>
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
                                <img src={zags} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>ZAGS</h2>
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
                                <img src={len} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Len</h2>
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
                                <img src={noodles} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Noodles</h2>
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
                                <img src={lui} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Lui Restaurant</h2>
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
                                <img src={raw} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Raw</h2>
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
                                <img src={jambull} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>JamBull</h2>
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
                                <img src={oblaka} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Oblaka</h2>
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
                                <img src={plv} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Lui Restaurant</h2>
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
                                <img src={svet} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Raw</h2>
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
                                <img src={afanasich} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>U Afanasicha</h2>
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

export default Restaurants;
