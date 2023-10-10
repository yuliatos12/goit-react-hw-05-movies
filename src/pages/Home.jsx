import MoviesListing from "components/MoviesListing/MoviesListing";
import { useEffect, useState } from "react";
import { getMovies, handleFetchError } from "services/movies-api";

const endPoint = "/trending/movie/day";

const Home = () => {
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        if (films.length > 0) {
            return;
        };
        getMovies(endPoint)
            .then(data => {
                setFilms(data.results);
            })
            .catch(handleFetchError);
    }, [films]);

    return <section>
        <MoviesListing films={films} />
    </section>
};

export default Home;