import React, { Component } from 'react';
import wropper from "../../img/wropper.png"
import bigkingcombo from "../../img/bigkingcombo.png"
import steakhousecombo from "../../img/steakhousecombo.png"
import cheeseburgercombo from "../../img/cheeseburgercombo.png"
import krispychickencombo from "../../img/krispychickencombo.png"
import doublekrispychickencombo from "../../img/doublekrispychickencombo.png"
import longchickencombo from "../../img/longchickencombo.png"
import villagechickencombo from "../../img/longchickencombo.png"
import naggetsburgercombo from "../../img/naggetsburgercombo.png"
import "../../Styles/FoodPageTabStyle.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="modalAD">
                    <div className="modalBox">
                        <img src={krispychickencombo} alt="" />

                        <h4>Krispy Chicken Combo</h4>
                        <p>2.000 tg</p>
                        <div className="modalDesc">
                            <p>Bun with sesame seeds, mayonnaise, iceberg lettuce, tomatoes, chicken cutlet Crispy chicken + king fries increased + Coca-Cola (500 ml)</p>
                        </div>
                        <div className="foodpage-box-btn modal-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>0</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>
                        </div>
                        <div className="modalBtn">
                            <button>Add 1 for 2.000 tg</button>
                        </div>
                    </div>
                    <div className="modalOther">
                        <div className="spec-offer">
                            <h1>Special offer</h1>
                            <button>7 nuggets with 35% discount +650.00 KZT</button>
                        </div>
                        <div className="choose">
                            <h1>Choose your sauce</h1>
                            <p>Choose only one</p>
                            <div className="choose-btns">
                                <div className="sauce">
                                    <button>Ketchup</button>
                                </div>
                                <div className="sauce">
                                    <button>BBQ sauce</button>
                                </div>
                                <div className="sauce">
                                    <button>Cheese sauce</button>
                                </div>
                            </div>
                        </div>
                        <div className="remove">
                            <h1>Remove ingredient</h1>
                            <div className="remove-btns">
                                <div className="remove-btn">
                                    <button>Mayonnaise</button>
                                </div>
                                <div className="remove-btn">
                                    <button>Tomato</button>
                                </div>
                                <div className="remove-btn">
                                    <button>Salad</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}



const Combo = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="foodpage-boxes">
                <div className="foodpage-box">
                    <div className="foodpage-box-img">
                        <img src={wropper} alt="" />
                    </div>
                    <div className="foodpage-box-text">
                        <div className="foodpage-box-title">
                            <p>Wopper Combo</p>
                        </div>
                        <div className="foodpage-box-cost">
                            <p>2.100 tg</p>
                        </div>
                    </div>
                    <div className="foodpage-box-btn">
                        <div className="minus">
                            <button>-</button>
                        </div>

                        <div className="count">
                            <span>0</span>
                        </div>
                        <div className="plus">
                            <Button style={{ padding: "2px" }} variant="primary" onClick={() => setModalShow(true)}>+</Button>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Combo;
