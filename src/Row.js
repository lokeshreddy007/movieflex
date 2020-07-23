    import React, { useState, useEffect } from 'react'

    import axios from './axios'
    import "./Row.css"
    const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

    function Row({ title, fetchUrl }) {
        const [movies, setMovies] = useState([]);
        useEffect(() => {
            // async function
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                console.log(request.data.results);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
        }, [fetchUrl]);
        return (
            <div className="row">
               <h2>{title}</h2>
               <div className="row__posters">
               		{movies.map(movie => (
               			<img 
               			key={movie.id}
               			className="row__poster" 
               			src={`${imageBaseUrl}${movie.poster_path}`} 
               			alt={movie.name} />
               		))}
               </div>
            </div>
        )
    }

    export default Row