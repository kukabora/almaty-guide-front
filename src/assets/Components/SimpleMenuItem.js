import React from 'react';

const SimpleMenuItem = ({ menuItems }) => {
    return (
        <div>
            <div className="foodpage-boxes">
                {menuItems.map((menuItem) => (
                    <div className="foodpage-box" key={menuItem.menu_id}>
                        <div className="foodpage-box-img">
                            <img src={menuItem.image_url} alt={menuItem.food_item} width="300px" />
                        </div>
                        <div className="foodpage-box-text">
                            <div className="foodpage-box-title">
                                <p>{menuItem.food_item}</p>
                            </div>
                            <div className="foodpage-box-cost">
                                <p>{menuItem.price} tg</p>
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
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimpleMenuItem;
