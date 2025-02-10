import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Connect with Us</h5>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase"> Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">About</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Services</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Blog</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Instagram</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                2023 Copyright
              
            </div>
        </footer>
    );
};

export default Footer;
