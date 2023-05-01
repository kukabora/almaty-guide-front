import React, {Component} from 'react';
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/BlcNavbar"

class Food extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FoodTab />
                <footer>

                </footer>
            </div>
        );
    }
}

export default Food;
