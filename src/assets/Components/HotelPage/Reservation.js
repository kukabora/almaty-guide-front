import React, {Component} from 'react';
import "../../Styles/EntertainmentPageStyle.css"
import sceme from "../../img/scheme.png"

class Reservation extends Component {
    render() {
        return (
            <div>
                <div className="reserv-head">
                    <h1>Black Panther: Wakanda Forever</h1>
                    <h6>19:30</h6>
                    <div className="tickets">
                        <p>Adult: 1.500</p>
                        <p>Kid: 700</p>
                        <p>Student: 1.100</p>
                        <p>VIP: 5.000</p>
                    </div>
                </div>
                <div className="res-main">
                    <div className="res-main-count">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                    </div>
                    <div className="res-main-img">
                        <img src={sceme} alt=""/>
                    </div>

                </div>

            </div>
        );
    }
}

export default Reservation;
