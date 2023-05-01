import React, {Component} from 'react';
import EntertainmentTab from "../Components/Hotels/EntertainmentTab";
import BlcNavbar from "../Components/BlcNavbar";

class Hotels extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <EntertainmentTab />
            </div>
        );
    }
}

export default Hotels;
