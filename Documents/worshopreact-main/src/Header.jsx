import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logo.svg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <a className="navbar-brand" href="#">
                <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
