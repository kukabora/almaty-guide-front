import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "@mui/material";
import item_img from "../../img/dijon-main.png";
import RestaurantScheme from "./RestaurantScheme";

const RestaurantPageTab = () => {
    const { foodPlaceId } = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/data/food-places/${foodPlaceId}/`);
                const data = await response.json();
                setPlaceDetails(data);
            } catch (error) {
                console.error("Error fetching place details:", error);
            }
        };

        fetchPlaceDetails();
    }, [foodPlaceId]);

    if (!placeDetails) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <Container>
                <div className="food-tabs foodpage">
                    <div>
                        <ul id="foood">
                            <li><a href="/food">Fast food</a></li>
                            <li className="food-active"><a href="/food">Restaurants</a></li>
                            <li><a href="/food">Canteens</a></li>
                            <li><a href="/food">Coffee houses</a></li>
                            <li><a href="/food">Steakhouses</a></li>
                            <li><a href="/food">Bars/pubs</a></li>
                        </ul>
                    </div>
                    <div className="foodpage-items respage-items">
                        <div className="foodpage-item">
                            <div className="foodpage-item-img">
                                <img src={placeDetails.image_url} alt={placeDetails.place_name} />
                            </div>
                            <div className="foodpage-item-description">
                                <div className="respage-item-title">
                                    <h1>{placeDetails.place_name}</h1>
                                </div>
                                <div className="respage-item-text">
                                    <p>
                                        Average check: {placeDetails.average_check} tenge <br />
                                        Cuisine: {placeDetails.cuisine} <br />
                                        Parking: Unguarded free <br />
                                        Accepted for payment: Cash, Payment by card <br />
                                        Address: {placeDetails.address} <br />
                                        Opening hours: Mon-Sun 09:00–23:00 <br />
                                        Phone: +7 (700) 555-50-57 <br />
                                        Seats: 50 <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="foodpage-menu respage-scheme">
                            <RestaurantScheme foodPlaceId={foodPlaceId} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RestaurantPageTab;