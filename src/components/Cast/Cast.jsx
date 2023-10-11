import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, handleFetchError } from "services/movies-api";
import css from './Cast.module.css'
const endPoint = '/movie';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        getMovieCast(endPoint, movieId)
            .then(data => {
                setCast(data.cast);
            })
            .catch(handleFetchError);
    }, [movieId]);

    return <>
        <h3>Cast:</h3>
        
        {cast.length !== 0 ?
            <ul className={css.cast}>
                {cast.map(({ id, name, character, profile_path }) =>
                    <li key={id}>
                        <p>{name} / {character}</p>
                        <img src={profile_path ?
                        `http://image.tmdb.org/t/p/w185${profile_path}` :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={name} width="100" height="150" />
                    </li>)}
            </ul> :
            <p>There is no information about the cast</p>
        }
    </>
};

export default Cast;