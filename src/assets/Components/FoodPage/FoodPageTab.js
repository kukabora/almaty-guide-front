import React, { Component } from 'react';
import { Container } from "@mui/material";
import "../../Styles/FoodPageTabStyle.css"
import Footer from "../Footer"
import MenuTab from "./MenuTab";

class FoodPageTab extends Component {
    state = {
        foodPlace: null,
    };

    async componentDidMount() {
        const { foodPlaceId } = this.props.match.params;
        const response = await fetch(`http://localhost:8000/api/data/food-places/${foodPlaceId}/`);
        const data = await response.json();
        this.setState({ foodPlace: data });
    }

    render() {
        const { foodPlace } = this.state;

        if (!foodPlace) {
            return <h1>Loading...</h1>;
        }

        return (
            <div>
                <Container>
                    <div className="food-tabs foodpage">
                        <div>
                            <ul id="foood">
                                <li className="food-active"><a href="/food">Fast food</a></li>
                                <li><a href="/food">Restaurants</a></li>
                                <li><a href="/food">Canteens</a></li>
                                <li><a href="/food">Coffee houses</a></li>
                                <li><a href="/food">Steakhouses</a></li>
                                <li><a href="/food">Bars/pubs</a></li>
                            </ul>
                        </div>
                        <div className="foodpage-items">
                            <div className="foodpage-item">
                                <div className="foodpage-item-img">
                                    <img src={foodPlace.image_url} alt="" />
                                </div>
                                <div className="foodpage-item-description">
                                    <div className="foodpage-item-title">
                                        <h1>{foodPlace.place_name}</h1>
                                    </div>
                                    <div className="foodpage-item-text">
                                        <div className="foodpage-address">
                                            <p><b>Address:</b> <br />
                                                {foodPlace.address}
                                            </p>
                                        </div>
                                        <div className="foodpage-avg-check">
                                            <p>Average check: {foodPlace.average_check} tg</p>
                                            <p>Cuisine: {foodPlace.cuisine}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="foodpage-menu">
                                <MenuTab foodPlaceId={foodPlace.food_place_id} />
                            </div>
                        </div>
                    </div>
                    <Footer />

                </Container>
            </div>
        );
    }
}

export default FoodPageTab;