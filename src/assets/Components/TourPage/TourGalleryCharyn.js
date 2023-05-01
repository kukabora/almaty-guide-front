import React, {Component} from 'react';
import item1 from "../../img/charyn1.png";
import item2 from "../../img/charyn2.png";
import item3 from "../../img/charyn4.png";
import item4 from "../../img/charyn3.png";
import item5 from "../../img/charyn5.png";

class TourGalleryCharyn extends Component {
    render() {
        return (
            <div className="gallery-tour">
                <div className="gal-up">
                    <div className="gal-up-item">
                        <img src={ item1 } alt=""/>
                    </div>
                    <div className="gal-up-item">
                        <img src={ item2 } alt=""/>
                    </div>
                </div>
                <div className="gal-down">
                    <div className="gal-down-item"><img src= { item3 } alt=""/></div>
                    <div className="gal-down-item"><img src= { item4 } alt=""/></div>
                    <div className="gal-down-item"><img src= { item5 } alt=""/></div>
                </div>
            </div>
        );
    }
}

export default TourGalleryCharyn;
