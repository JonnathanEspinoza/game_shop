import { API } from '../config';
import axios from 'axios';

export const getVideogames = async() => {
    try {
        const response = await axios.get(`${API}/videogame/videogames`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}