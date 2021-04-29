import React, { useState, useEffect } from 'react';
import { Redirect} from 'react-router-dom';
import Navigation from '../layout/Navigation';

import { signinG, authenticate, isAuthenticated } from './apiCore';

import './Signin.css';

const Sigin = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signinG({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false });
                } else {
                    authenticate(
                        data, () => {
                            setValues({
                                ...values,
                                redirectToReferrer: true
                            });
                        }
                    )
                }
            });
    }

    const signInForm = () => (
        <form className="sign-box">
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Sign In</button>
        </form>
    );

    const showError = () => {
        <div className='alert alert-danget' role="alert" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    }

    const showLoading = () => {
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        )
    }

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    return (
        <>
            <Navigation />
            <div className="mt-5">
                <h4 className="text-center mb-5">Log In</h4>
                {showError()}
                {showLoading()}
                {signInForm()}
                {redirectUser()}
            </div>
        </>
    )
}

export default Sigin;