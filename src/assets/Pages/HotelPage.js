import React, {Component} from 'react';
import Footer from "../Components/Footer";
import HotelPageTab from "../Components/HotelPage/HotelPageTab";
import BlcNavbar from "../Components/BlcNavbar";

class HotelPage extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <HotelPageTab />
                <Footer />
            </div>
        );
    }
}

export default HotelPage;
