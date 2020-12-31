import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <a className="navbar-brand" href="#">Videogame</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search</a>
                            </li>
                        </ul>
                        
                        <div className="d-flex">
                        <ul className="navbar-nav p-2 bd-highlight">
                            <li className="nav-item bd-highlight">
                                <a className="nav-link" aria-current="page" href="#">Profile</a>
                            </li>
                            <li className="nav-item bd-highlight">
                                <a className="nav-link" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item bd-highlight">
                                <a className="nav-link" aria-current="page" href="#">Logout</a>
                            </li>
                        </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;