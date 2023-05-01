import React, {Component} from 'react';
import MovementComponent from "../Components/Movements/MovementComponent";
import {Container} from "react-bootstrap";

class Movement extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="movement-text">
                        <h1>Transport in Almaty</h1>
                        <p>There is a fairly busy transport connection in Almaty - you can freely move around the city on comfortable trolleybuses, shuttle buses and metro. At any time, tourists have the opportunity to use the services of a taxi, car rental or bike sharing.</p>
                    </div>
                    <MovementComponent />
                </Container>
            </div>
        );
    }
}

export default Movement;
