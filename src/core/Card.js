import React, { useState } from 'react';
import './Card.css';
import ShowImage from './ShowImage';
import { Link } from 'react-router-dom';

const Card = ({ videogame }) => {
    const [count, setCount] = useState(videogame.count);

    return (
        <div>
            <div className="card m-10 card-cont">
                <ShowImage className="img" item={videogame} url="videogame" />
                <h2>{videogame.name}</h2>
                <p>${videogame.price}</p>
                <p>{videogame.description}</p>
                <Link to={`/videogame/${videogame._id}`}>
                    <button className='btn btn-success'>Ver Mas</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;