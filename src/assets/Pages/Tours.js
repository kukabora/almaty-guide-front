import React, {Component} from 'react';
import TourComponent from "../Components/Tours/TourComponent";
import BlcNavbar from "../Components/BlcNavbar";

class Tours extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <TourComponent />
            </div>
        );
    }
}

export default Tours;
