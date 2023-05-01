import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import ReservablePlaces from "./ReservablePlaces";
import MenuPlaces from "./MenuPlaces";

const FoodTab = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [foodPlaces, setFoodPlaces] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/data/food-place-categories/")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        axios
            .get(
                `http://localhost:8000/api/data/food-places/?food_place_category=${category.food_place_category_id}`
            )
            .then((response) => {
                setFoodPlaces(response.data);
            })
            .catch((error) => {
                console.error("Error fetching food places:", error);
            });
    };

    return (
        <div>
            <Container>
                <div className="food-tabs foodpage">
                    <div>
                        <ul id="foood">
                            {categories.map((category) => (
                                <li key={category.food_place_category_id}>
                                    <button class="btn" onClick={() => handleCategoryClick(category)}>
                                        {category.category_name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="foodpage-items">
                        {selectedCategory && (
                            <div>
                                {selectedCategory.reservable ? (
                                    <ReservablePlaces foodPlaces={foodPlaces} />
                                ) : (
                                    <MenuPlaces foodPlaces={foodPlaces} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FoodTab;
