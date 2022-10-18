import React from 'react';

export default function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg bg-white" id="navbar-main-container">

            <div className="container scroller" id="navbar-container">
                <a className="navbar-brand  fw-bold text-dark" href="/">
                    <img src="./images/logo2.jpg" alt="Logo" className="d-inline-block align-text-top pe-2" />Apps</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fw-bold me-3" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold me-3" href="/">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold me-3" href="/">FEATURE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold me-3" href="/">PRICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold me-3" href="/">FAQ</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active  fw-bold" href="/" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                PAGES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action1</a></li>
                                <li><a className="dropdown-item" href="/">Another2</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}
