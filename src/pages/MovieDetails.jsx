import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails, handleFetchError } from "services/movies-api";
import css from "pages/Pages.module.css"
const endPoint = '/movie';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        if (!movieId) {
            return;
        };

        getMovieDetails(endPoint, movieId)
            .then(data => {
                setMovie(data);
            })
            .catch(handleFetchError);
    }, [movieId]);

    if (!movie) {
        return;
    };
    const { poster_path, title, original_title, release_date, genres, vote_average, overview } = movie;

    return <section className={css.container}>
        <Link to={backLinkRef.current}>{'Return'}</Link>
        <h2>About:</h2>
        {movie && <>
            <div className={css.geninfo}>
                <div>
                    <h3>{original_title}</h3>
                <p>{release_date}</p>
                <img src={poster_path ? `http://image.tmdb.org/t/p/w342${poster_path}` : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'} alt={title} width="200" />
               </div>
             <div className={css.info}>
                    <p><b>Genres:</b> {genres.map(({name}) => `${name.toLowerCase()}, `)}</p>
                    <p><b>Ranking:</b> {vote_average}</p>
                    <p><b>Overview:</b> {overview}</p>
                </div>
            </div>
            <h3>More:</h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        }
    </section>
};

export default MovieDetails;