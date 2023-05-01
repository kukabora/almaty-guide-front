import React, {Component} from 'react';
import item1 from "../../img/kayindy-tour-item1.png"
import item2 from "../../img/kayindy-tour-item2.png"
import item3 from "../../img/kayindy-tour-item3.png"
import item4 from "../../img/kayindy-tour-item4.png"
import item5 from "../../img/kayindy-tour-item5.png"

class TourGalery extends Component {
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

export default TourGalery;
