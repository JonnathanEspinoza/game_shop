import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import { getVideogames } from './apiCore';
import Card from './Card';

const Home = (req, res) => {

    // state
    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false);

    // api
    const loadVideoGames = () => {
        getVideogames().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setVideogames(data.data);
                console.log(data);
            }
        })
    }

    useEffect(() => {
        loadVideoGames();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;