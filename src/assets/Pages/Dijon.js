import React, { Component } from 'react';
import dijon_1 from '../img/dijon.png'
import dijon_2 from '../img/dijon.png'
import dijon_3 from '../img/dijon.png'
import dijon_4 from '../img/dijon.png'
import { Container } from "react-bootstrap";

class Dijon extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="res-title">
                        <h3>Dijon</h3>
                    </div>
                    <div className="img-boxes">
                        <div className="img-box"><img src={dijon_1} alt="" width="100%" /></div>
                        <div className="img-box"><img src={dijon_2} alt="" width="10%" /></div>
                        <div className="img-box"><img src={dijon_3} alt="" /></div>
                        <div className="img-box"><img src={dijon_4} alt="" /></div>
                    </div>
                    <div className="res-text">
                        <div className="l-res-text">
                            <p>The modern restaurant of fine French cuisine “Dijon” in Almaty, Kazakhstan. The restaurant is designed to accommodate up to 50 guests, serving delicious French dishes, outstanding wines and undoubtedly the finest desserts in the city. In the foundation of the project lays the tall curved rack protruding from the wall. The restaurant also has a small glass room of favorable temperature for storing wine and flowers. A floating concrete staircase, fenced on both sides with glass and mirror with vertical lighting, leads you to a separate area of the second floor with a large family table. </p>
                        </div>
                        <div className="r-res-text">
                            <p>Average check: 10.000-15.000 tenge</p>
                            <p>Cuisine: French</p>
                            <p>Address:</p>
                            <p>Almaty, Al-Farabi ave., 140a/2 (MFC VILLA)</p>
                            <p>Phone number: +7 (700) 555‒50‒57</p>
                            <p>Opening hours: Mon-Sun 09:00 - 23:00</p>
                            <p>Amount of seats: 50</p>
                            <p>Parking: Unguarded free</p>
                        </div>
                    </div>
                    <div className="res-btn">
                        <a href="/res-reserv">Reserve a table</a>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Dijon;
