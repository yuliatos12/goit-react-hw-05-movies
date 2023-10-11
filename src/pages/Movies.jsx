import MoviesListing from "components/MoviesListing/MoviesListing";
import Searchbar from "components/MovieSearch/MovieSearch";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies, handleFetchError } from "services/movies-api";

const endPoint = '/search/movie';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? "";
  
  useEffect(() => {
    if (searchQuery === '') {
      return;
    };
    if (films.length > 0) {
      return;
    };

  
    getSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(handleFetchError);
    
  }, [films, searchQuery]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');;
    
    if (searchValue === '') {
      alert('Enter your request, please!');
      setSearchParams({});
      setFilms([]);
      return;
    };

    if (searchValue === searchQuery) {
      alert('Enter new request, please!');
      return;
    };

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return <div>
    <Searchbar onSubmit={onSubmit} value={searchQuery} />
    <section>
      <MoviesListing films={films} />
    </section>
  </div>
};

export default Movies;