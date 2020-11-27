import React from 'react';
import laptop from '../images/laptop.png';

const Digital = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ml-auto mr-auto text-center">
                <h1>Going Digital</h1>
                <h5 className="description">Aflete allows you to transform your following and expertise into a profitable, automated online business, ensuring your content is secure and protected. 
                As the world continues to evolve and lean further and further towards digital, your business should do the same. 
                On average our Afletes who have made the switch have seen a 3x increase in sales compared to when they were selling PDF guides</h5>
            </div>
            <div className="col-lg-6 col-md-6">
                    <div className="image-container animate__animated animate__bounce">
                   <img src={laptop} className="img-fluid laptopComponent pt-5" alt="latop"/>
               </div>
            </div>
          </div>
        </div>
    );
};

export default Digital;