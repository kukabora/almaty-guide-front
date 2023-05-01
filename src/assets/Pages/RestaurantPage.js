import React, {Component} from 'react';
import Footer from "../Components/Footer";
import RestaurantPageTab from "../Components/RestaurantPage/RestaurantPageTab";
import "../Styles/RestaurantPageStyle.css"
import BlcNavbar from "../Components/BlcNavbar";

class RestaurantPage extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <RestaurantPageTab />
                <Footer />
            </div>
        );
    }
}

export default RestaurantPage;
