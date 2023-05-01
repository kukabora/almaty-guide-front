import React from 'react';
import { Link } from 'react-router-dom';

const ReservablePlaces = ({ foodPlaces }) => {
    if (!foodPlaces) {
        return <h1>Seems like there is nothing yet :(</h1>;
    }

    return (
        <div className="food-boxes">
            {foodPlaces.map((place) => (
                <div className="food-box" key={place.food_place_id}>
                    <div className="box-img">
                        <img src={place.image_url} alt={place.place_name} />
                    </div>
                    <div className="box-text">
                        <h2>{place.place_name}</h2>
                        <p>
                            Average check: <span className="text-bold">{place.average_check} tenge</span>
                        </p>
                        <p>
                            Cuisine: <span className="text-bold">{place.cuisine}</span>
                        </p>
                        <div className="addresses">
                            <p>Address:</p>
                            <div className="text-bold">
                                <p>{place.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-btn">
                        <Link to={`/restaurantPage/${place.food_place_id}`} style={{ border: "none", background: "none", padding: "0" }}>
                            <button>Reserve table</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReservablePlaces;
