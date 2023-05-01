import React, {Component} from 'react';
import {Container} from "@mui/material";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../Styles/BasketStyle.css"
import BasketItems from "./BasketItems";

class BasketTab extends Component {
    render() {
        return (
            <div>

                    <div className="basket-tabination">
                        <Tabs
                            defaultActiveKey="fastfood"
                            id="uncontrolled-tab-example"
                            className ="basket_tabs"
                        >
                            <Tab eventKey="fastfood" title="Fast food">
                                <BasketItems />
                            </Tab>


                            <Tab eventKey="restaurants" title="Restaurants">
                            </Tab>
                            <Tab eventKey="canteens" title="Canteens" className="foot-tab">
                            </Tab>
                            <Tab eventKey="coffeehouses" title="Coffee houses">
                            </Tab>

                        </Tabs>
                    </div>

            </div>
        );
    }
}

export default BasketTab;
