import { API } from '../config';
import axios from 'axios';

export const getVideogames = async () => {
    try {
        const response = await axios.get(`${API}/videogame/videogames`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const signin = async (user) => {
    try {
        const response = await axios.post(`${API}/auth/signin`, user);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const signinG = user => {
    return fetch(`${API}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(err => {
            console.log(err);
        })
}

// save the token and the data in the localStorage
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/auth/signout`, {
            method: 'GET',
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
}

// validate
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    }
    return false;
}