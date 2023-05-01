import React, {Component} from 'react';
import logo from "../img/blclogo.png"
import "../Styles/NavbarStyles.css";
import Search from "./BlcSearch";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "@mui/material";

class Navbar extends Component {
    render() {
        return (
            <Container>
                <div className="navigation-panel">
                    <nav>
                        <a href="/">
                            <img src={logo}
                                 alt=""
                                 height=""
                                 className="d-inline-block align-top"
                                 alt="Logo"

                            />
                        </a>
                        <div>
                            <ul id="navbar" className="blc">
                                <li><a href="/food">Food</a></li>
                                <li><a href="/hotel">Hotel</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/tours">Tours</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul id="navbar" className="blc">
                                <li><Search /></li>
                                <li><a href="/login"> <FontAwesomeIcon icon={faUserAlt} /></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Container>
        );
    }
}

export default Navbar;
