import React, {Component} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Combo from "../FoodPage/Combo";
import Burgers from "../FoodPage/Burgers";
import Today from "./Today";

class AfishaTab extends Component {
    render() {
        return (
            <div className="foodpage-menu-tabs">
                <Tabs
                    defaultActiveKey="combo"
                    id="uncontrolled-tab-example"
                    className ="menu-tabs"
                >
                    <Tab eventKey="combo" title="Today" className="menu-tab">
                        <Today />
                    </Tab>


                    <Tab eventKey="burgers" title="Tomorrow" className="menu-tab">

                    </Tab>
                    <Tab eventKey="snacks" title="Date" className="menu-tab">
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default AfishaTab;
