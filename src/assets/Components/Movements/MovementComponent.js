import React, {Component} from 'react';
import underground from '../../img/underground.png'
import bus from '../../img/bus.png'
import trolleybus from '../../img/trolleybuses.png'
import taxi from '../../img/taxi.png'
import rentcar from '../../img/rentcar.png'
import bikerental from '../../img/bikerental.png'
import cableway from '../../img/cableway.png'
import electricscooter from '../../img/electricscooter.png'


class MovementComponent extends Component {
    render() {
        return (
            <div>
                    <div className="mov-boxes">
                        <div className="mov-box">
                            <img src={underground} alt=""/>
                            <h1>Underground</h1>
                        </div>
                        <div className="mov-box">
                            <img src={bus} alt=""/>
                            <h1>Bus</h1>
                        </div>
                        <div className="mov-box">
                            <img src={trolleybus} alt=""/>
                            <h1>Trolleybuses</h1>
                        </div>
                        <div className="mov-box">
                            <img src={taxi} alt=""/>
                            <h1>Taxi</h1>
                        </div>
                        <div className="mov-box">
                            <img src={rentcar} alt=""/>
                            <h1>Rent a car</h1>
                        </div>
                        <div className="mov-box">
                            <img src={bikerental} alt=""/>
                            <h1>Bike rental</h1>
                        </div>
                        <div className="mov-box">
                            <img src={cableway} alt=""/>
                            <h1>Cableway</h1>
                        </div>
                        <div className="mov-box">
                            <img src={electricscooter} alt=""/>
                            <h1>Electric scooter</h1>
                        </div>
                    </div>
            </div>
        );
    }
}

export default MovementComponent;
