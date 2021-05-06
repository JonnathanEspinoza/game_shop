// este formulario utiliza l libreria React Hook Form para validad inputs
// https://react-hook-form.com/get-started

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Navigation from '../layout/Navigation';
import { Link } from 'react-router-dom';
import { sigup } from './apiCore';

import './Signup.css';

const SignupForm = () => {

    // state
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    // yup schema to validate inputs
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    // initialize the React Hook Form methods
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // submit method
    const clickSubmit = data => {
        setError(false);
        sigup(data)
            .then(data => {
                if (data.error) {
                    setError(data);
                    setSuccess(false);
                } else {
                    reset();
                    setError(false);
                    setSuccess(true);
                }
            })
    }

    // shows the validation error of the inputs
    const errorValidator = (messageError) => (
        <p style={{color: '#ff0000'}}>{messageError}</p>
    )

    // form structure
    const signUpForm = () => (
        <form className="sign-box" onSubmit={handleSubmit(clickSubmit)}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" {...register('name')} className="form-control" />
                {errors.name && errorValidator(errors.name.message)}
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" {...register('email')} className="form-control" />
                {errors.email && errorValidator(errors.email.message)}
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" {...register('password')} className="form-control" />
                {errors.password && errorValidator(errors.password.message)}
            </div>
            <button type='submit' className="btn btn-primary">Sign Up</button>
            <button type='button' className="btn btn-primary" onClick={() => {
                reset({}, {
                    keepErrors: false
                })
            }}>reset</button>
        </form>
    )

    // show backend error alert
    const showError = () => (
        <div className='alert alert-danger' style={{ display: error ? '' : 'none' }} >
            {error}
        </div>
    )

    // shows success message when the user has created an account successfully
    const showSuccess = () => (
        <div className='alert alert-info' style={{ display: success ? '' : 'none' }} role="alert">
            New Account Successfully Created You can now
            <Link to='signin'>Sign in</Link>
        </div>
    )

    return (
        <>
            <Navigation />
            <div className="mt-5">
                <h4 className="text-center mb-5">Sign Up</h4>
                {showSuccess()}
                {showError()}
                {signUpForm()}
            </div>
        </>
    );
}

export default SignupForm;
