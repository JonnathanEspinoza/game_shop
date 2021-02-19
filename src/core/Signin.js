import React from 'react';
import Navigation from '../layout/Navigation';

import './Signin.css';

const Sigin = () => {

    const signInForm = () => (
        <form className="sign-box">
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className="form-control" />
            </div>
            <button className="btn btn-primary">Sign In</button>
        </form>
    );

    return (
        <>
            <Navigation />
            <div className="mt-5">
                <h4 className="text-center mb-5">Log In</h4>
                {signInForm()}
            </div>
        </>
    )
}

export default Sigin;