import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import logo from '../img/Logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home'
import Food from '../Pages/Food'
import Hotels from '../Pages/Hotels'
import Events from '../Pages/Events'
import Tours from '../Pages/Tours'
import Movement from '../Pages/Movement'
import Contacts from '../Pages/Contacts'
import Login from '../Pages/Login'
import Reddragon from "../Pages/Reddragon";
import Dijon from "../Pages/Dijon";
import ResReserv from "../Pages/Res-reserv";
import Reg from "../Pages/Reg";
import TourPage from "../Pages/TourPage"
import FoodPage from "../Pages/FoodPage";
import RestaurantPage from "../Pages/RestaurantPage";
import HotelPage from "../Pages/HotelPage";
import HotelPageReserv from "../Pages/HotelPageReserv";
import Charyn from "../Pages/Charyn";
import Basket from "../Pages/Basket";
import Account from "../Pages/Account"



class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/food" element={<Food />} />
                        <Route exact path="/hotel" element={<Hotels />} />
                        <Route exact path="/events" element={<Events />} />
                        <Route exact path="/tours" element={<Tours />} />
                        <Route exact path="/movement" element={<Movement />} />
                        <Route exact path="/contacts" element={<Contacts />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/foodpage/:foodPlaceId" element={<FoodPage />} />
                        <Route exact path="/restaurantPage/:foodPlaceId" element={<RestaurantPage />} />
                        <Route exact path="/res-reserv" element={<ResReserv />} />
                        <Route exact path="/reg" element={<Reg />} />
                        <Route exact path="/basket" element={<Basket />} />
                        <Route exact path="/hotelpage" element={<HotelPage />} />
                        <Route exact path="/tourpage" element={<TourPage />} />
                        <Route exact path="/tourpage-charyn" element={<Charyn />} />
                        <Route exact path="/hotelpageres" element={<HotelPageReserv />} />
                        <Route exact path="/account" element={<Account />} />

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Header;
