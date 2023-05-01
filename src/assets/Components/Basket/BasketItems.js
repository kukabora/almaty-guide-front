import React, {Component} from 'react';
import krispychickencombo from "../../img/krispychickencombo.png"
import woppercombo from "../../img/wropper.png"

class BasketItems extends Component {
    render() {
        return (
            <div>
                <div className="basket-boxes">
                    <div className="basket-box">
                        <div className="basket-box-img">
                            <img src={krispychickencombo} alt=""/>
                        </div>
                        <div className="basket-box-title">
                            <h6>Krispy Chicken Combo</h6>
                            <p>2.000 tg</p>
                        </div>
                        <div className="basket-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>1</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="basket-box">
                        <div className="basket-box-img">
                            <img src={woppercombo} alt=""/>
                        </div>
                        <div className="basket-box-title">
                            <h6>Wopper Combo</h6>
                            <p>2.100 tg</p>
                        </div>
                        <div className="basket-box-btn">
                            <div className="minus">
                                <button>-</button>
                            </div>
                            <div className="count">
                                <span>1</span>
                            </div>
                            <div className="plus">
                                <button>+</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default BasketItems;
