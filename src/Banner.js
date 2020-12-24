import React, {useState, useEffect} from 'react'
import './Banner.css';
import requests from './Request';
import axios from './axios';

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){

            const request = await axios.get(requests.fetchNetFlixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request;
        }

        fetchData();
    
    }, [])



function truncateDesc(str, n){

    return str?.length > n ? str.substr(0, n-1) + "...." :  str;

}

    return (
        <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="header__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="header__buttons">
                    <button className="header__button">Play</button>
                    <button className="header__button">My List</button>

                </div>

                <h1 className="banner__description">{truncateDesc(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadebBottom"></div>

            
        </header>
    )
}

export default Banner;
