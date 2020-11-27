import React from 'react';
import iphone1 from '../images/iphonex-1.png';
import iphone2 from '../images/iphonex-2.png';
import iphone3 from '../images/iphonex-3.png';

const Growth = () => {
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-8 text-center ml-auto mr-auto">
                    <h1 className="title">Growth</h1>
                    <h6 className="description">The Aflete app allows you to scale your business to an unlimited degree. No more are you confined to PTing in your local area, the Aflete app now gives you the means to reach a worldwide customer base. Serving an unlimited number of customers at once, with minimal effort across all corners of the world. <br />
                    Available on both The Google Play Store and The Apple store, your guide is always just a click away.</h6>
                </div>
            </div>
            <div className="container row mt-3 imagesCard">
                <div className="col-md-4">
                    <img src={iphone2} className="img-fluid img-hover" alt="iphone1" />
                </div>
                <div className="col-md-4">
                    <img src={iphone1} className="img-fluid img-hover" alt="iphone2" />
                </div>
                <div className="col-md-4">
                    <img src={iphone3} className="img-fluid img-hover" alt="iphone3" />
                </div>
            </div>
        </div>
    );
};

export default Growth;