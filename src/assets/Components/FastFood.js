import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import reddragon from "../img/reddragon.png";
import salambro from "../img/salambro.png";
import burgerking from "../img/burgerking.png";
import dodopizza from "../img/dodopizza.png";
import kfc from "../img/kfc.png"
import bahandi from "../img/bahandi.png"
import papajohns from "../img/papajohns.png"
import mcdon from "../img/mcdon.png"
import gippo from "../img/gippo.png"
import lanzhou from "../img/lanzhou.png"
import zhekas from "../img/zhekas.png"
import korean from "../img/koreanstreet.png"



class FastFood extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="food-boxes">

                        <div className="food-box">
                            <div className="box-img">
                                <img src={burgerking} alt="" />
                            </div>
                            <div className="box-text">
                                <h2>Burger King</h2>
                                <p>Average check: <span className="text-bold"> 1000-2500 tenge </span></p>
                                <p>Cuisine: <span className="text-bold"> Asian, Chinese, Pan-Asian</span></p>
                                <div className="addresses">
                                    <p>Addresses:</p>
                                    <div className="text-bold">
                                        <p>Gogol, 87</p>
                                        <p>Rozybakiyeva, 136/1</p>
                                        <p>Tole bi, 55/1</p>
                                        <p> Zhibek Zholy avenue, 64</p>
                                        <p>Tole bi, 229/2 </p>
                                        <p>SEC Mega Center Alma-Ata Rozybakiyeva, 247a</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-btn">
                                <a href="/foodpage" style={{ border: "none", background: "none", padding: "0" }}> <button>Check menu</button> </a>
                            </div>
                        </div>


                    </div>
                </Container>
            </div>
        );
    }
}

export default FastFood;
