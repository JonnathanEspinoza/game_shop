import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <a className="navbar-brand" href="/">Videogame</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavItem className="nav-link">
                                <Link className="nav-link" to="/">
                                    Inicio
                                </Link>
                            </NavItem>
                        </ul>

                        <ul className="navbar-nav">
                            <NavItem className="nav-link">
                                <Link className="nav-link" to="/signup">
                                    Singup
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className="nav-link" to="/signin">
                                    Login
                                </Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;