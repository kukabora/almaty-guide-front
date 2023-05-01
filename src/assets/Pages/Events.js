import React, {Component} from 'react';
import EventComponent from "../Components/Events/EventComponent";
import Footer from "../Components/Footer";
import BlcNavbar from "../Components/BlcNavbar";

class Events extends Component {
    render() {
        return (
            <div>
                <BlcNavbar />
                <EventComponent />
                <Footer />
            </div>
        );
    }
}

export default Events;
