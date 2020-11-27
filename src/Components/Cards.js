import React from 'react';

const Cards = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-5 card text-center mr-auto ml-auto">
                    <div className="card-body">
                        <h1 className="card-title title">Brand Identity</h1>
                        <p className="card-text description">Our team provides you with the necessary tools to give your business that professional look. We not only provide you with the platform to house your workout guide, but we also design and develop your website, and provide you with dynamic promotional content in order for you to build the hype and create a real brand identity. </p>
                    </div>
                </div>
                <div className="col-md-5 card text-center mr-auto ml-auto">
                    <div className="card-body">
                        <h1 className="card-title title">Sales & Reporting</h1>
                        <p className="card-text description">Upon launch of your guide, you will have access to your own business dashboard. You can view the full backend of your business in real time, meaning you can view live traffic and sales from all over the world with payments being transferred to you within seconds of each transaction. </p>
                    </div>
                </div>
            </div>
            <div className="text-center contact mt-5 pt-5">
                <h1 className="title">Be the first to know about our updates!</h1>
                <div className="input-group mb-3 p-2 rounded bg-white my-5 contact-input mx-auto">
                    <input type="text" class="form-control border-0" placeholder="Enter your email address" />
                    <div className="input-group-append">
                        <button className="btn btn-danger font-weight-bolder rounded px-4" type="button">Get Started</button>
                    </div>
                </div>
            </div>
            <footer className="text-center mt-5 pt-5">
                <p>@ Aflete 2020  || All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Cards;