import React, {Component} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Container} from "@mui/material";
import Theatres from "./Theatres";
import Cinemas from "./Cinemas"
import LivePerfomance from "./LivePerformances"
import FashionIndustry from "./FashionIndustry"
import ComedyClub from "./ComedyClub"

class EntertainmentTab extends Component {
    render() {
        return (
            <Container>
            <div className="food-tabs">

                    <Tabs
                        defaultActiveKey="cinemas"
                        id="uncontrolled-tab-example"
                        className =" tabss"
                    >
                        <Tab eventKey="cinemas" title="Hotels">
                            <Cinemas />
                        </Tab>
                    </Tabs>

            </div>
            </Container>
        );
    }
}

export default EntertainmentTab;
