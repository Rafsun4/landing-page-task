import React from 'react';
import white from "../images/white.png";
import phone from "../images/app.png";

const Header = () => {
    return (
        <div className="container pt-5">
            <img width="98px" height="38px" alt="logo" src={white}/>
            <div className="row mt-5">
                <div className="col-md-6 col-sm-6 pt-5 mt-2 text-center">
                    <h1>Join <br />The Biggest Afletes <br />On The Web.</h1>
                    <h4 className="pt-2">Your Workouts, Your Customers, Your Brand.</h4>
                    <p className="description">AFLETE is a fitness app exclusively used by influencers to show their fitness content.</p>
                    <a href="https://aflete.com/"><button className="btn btn-danger">Download Now</button></a>
                </div>
                <div className="col-md-6 col-sm-6 pb-5 mb-5 d-flex justify-content-center">
                    <img className="img-fluid pt-3 pl-3 w-75 floating" src={phone} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;