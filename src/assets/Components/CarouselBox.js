import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import almatyImg from '../img/almatyImg.png'
import almaty from  '../img/almaty.webp'

class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={almatyImg}
                            alt="Almaty"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={almaty}
                            alt="Almaty"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselBox;
