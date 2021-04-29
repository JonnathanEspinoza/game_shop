import React, { useState } from 'react';
import Navigation from '../layout/Navigation';
import { Link } from 'react-router-dom';

import './Signup.css';

import { sigup } from './apiCore';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false });
        sigup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    });
                }
            })
    }

    const signUpForm = () => (
        <form className="sign-box">
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChange('name')} value={name} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handleChange('email')} value={email} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" onChange={handleChange('password')} value={password} className="form-control" />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Sign Up</button>
        </form>
    );

    const showError = () => {
        <div className='alert alert-danger' style={{ display: error ? '' : 'none' }} >
            {error}
        </div>
    }

    const showSuccess = () => {
        <div className='alert alert-info' style={{display: success ? '':'none'}} role="alert">
            New Account Successfully Created You can now
            <Link to='signin'>Sign in</Link>
        </div>
    }

    return (
        <>
            <Navigation />
            <div className="mt-5">
                <h4 className="text-center mb-5">Sign Up</h4>
                {signUpForm()}
                {showError()}
                {showSuccess()}
            </div>
        </>
    )
}

export default Signup;