// este formulario utiliza la libreria React Hook Form para validar inputs
// https://react-hook-form.com/get-started

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Navigation from '../layout/Navigation';
import { Redirect } from 'react-router-dom';
import { signinG, authenticate, isAuthenticated } from './apiCore'
import Loading from './Loading';
import { Spinner } from 'reactstrap';

import './Signin.css';

const SignInForm = () => {

    // state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    // check if the user is authenticated
    const { user } = isAuthenticated();

    // yup schema to validate inputs
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    // initialize the React Hook Form methods
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // submit method
    const clickSubmit = data => {
        setError(false);
        setLoading(true);
        signinG(data)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setLoading(false);
                } else {
                    authenticate(
                        data, () => {
                            setRedirectToReferrer(true)
                        }
                    )
                }
            });
    };

    // shows the validation error of the inputs
    const errorValidator = (messageError) => (
        <p style={{color: '#ff0000'}}>{messageError}</p>
    )

    // form structure
    const signInForm = () => (
        <form className="sign-box" onSubmit={handleSubmit(clickSubmit)}>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" {...register('email')} className='form-control' />
                {errors.email && errorValidator(errors.email.message)}
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" {...register('password')} className='form-control' />
                {errors.password && errorValidator(errors.password.message)}
            </div>
            <input type='submit' className="btn btn-primary" />
        </form>
    )

    // show backend error alert
    const showError = () => (
        <div className='alert alert-danger' role="alert" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    // shows loading when submit is executing
    const showLoading = () => 
        loading && (
            <Loading/>
        )

    // redirects to the main page if the user is logged in
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

export default SignInForm;