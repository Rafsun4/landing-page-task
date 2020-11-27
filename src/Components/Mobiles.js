import React from 'react';
import google from '../images/android.png';
import apple from '../images/apple.png';

const Mobiles = () => {
    return (
        <div className="container">
            <div className="col-md-8 text-center ml-auto mr-auto">
                <h1 className="title">Tried, Tested and Proved</h1>
                <h6 className="description">Since its release 2 + years ago the Aflete app has succeeded in aiding some of the biggest influencers on the web to become the CEO’s they are today.<br />

                With over a million downloads, 100 + featured Afletes in more than 10 countries and a 4.7 REVIEW on the app store, you can rest assured your guides will have a reliable home.</h6>
                <ul className="list-unstyled list-inline pt-2">
                    <li className="list-inline-item pb-1">
                        <a href="https://apps.apple.com/us/app/aflete/id1144968481#?platform=iphone"><img src={google} height="60px" alt="" /></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://play.google.com/store/apps/details?id=com.aflete.afleteapp&hl=en&gl=US"><img src={apple} height="60px" alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mobiles;