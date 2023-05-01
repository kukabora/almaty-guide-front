import React from 'react';
import { useParams } from 'react-router-dom';
import FoodPageTab from '../Components/FoodPage/FoodPageTab';
import Footer from '../Components/Footer';
import BlcNavbar from '../Components/BlcNavbar';

function FoodPage() {
    const { foodPlaceId } = useParams();

    return (
        <div>
            <BlcNavbar />
            <FoodPageTab match={{ params: { foodPlaceId } }} />
            <Footer />
        </div>
    );
}

export default FoodPage;
