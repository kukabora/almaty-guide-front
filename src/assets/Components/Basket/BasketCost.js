import React, {Component} from 'react';

class BasketCost extends Component {
    render() {
        return (
            <div>
                <div className="basket-promo">
                    <div className="promo-text">
                        <h5>Enter promo code</h5>
                    </div>
                    <div className="promo">
                        <div className="promo-input">
                            <input type="text" placeholder="Promocode" />
                        </div>
                        <div className="promo-btn">
                            <button>Activate</button>
                        </div>
                    </div>
                </div>
                <div className="basket-dis">
                    <div className="dis-title">
                        <div className="without-dis-title">
                            <p>Without discount</p>
                        </div>
                        <div className="discount-title">
                            <p>Discount</p>
                        </div>
                        <div className="total-title">
                            <p>Total</p>
                        </div>
                    </div>
                    <div className="dis-cost">
                        <div className="without-dis-cost">
                            <p>4.100 tg</p>
                        </div>
                        <div className="discount-cost">
                            <p>15% off</p>
                        </div>
                        <div className="total-cost">
                            <p>3.485 tg</p>
                        </div>
                    </div>
                </div>
                <div className="basket-order-btn">
                    <button>Order</button>
                </div>
            </div>
        );
    }
}

export default BasketCost;
